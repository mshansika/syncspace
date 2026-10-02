"use client";

import { useEffect, useState } from "react";
import { RotateCcw, Trophy } from "lucide-react";
import { motion } from "framer-motion";

type Card = {
  id: number;
  value: string;
  matched: boolean;
};

const values = ["🧠", "🧠", "🧩", "🧩"];

function createCards(): Card[] {
  return values
    .map((value, index) => ({
      id: index,
      value,
      matched: false,
    }))
    .sort(() => Math.random() - 0.5);
}

export default function MemoryMatch() {
  const [cards, setCards] = useState<Card[]>(createCards);
  const [selected, setSelected] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [locked, setLocked] = useState(false);

  const matchedCount = cards.filter((card) => card.matched).length;
  const completed = matchedCount === cards.length;

  const handleCardClick = (index: number) => {
    if (locked) return;
    if (selected.includes(index)) return;
    if (cards[index].matched) return;
    if (selected.length === 2) return;

    const nextSelected = [...selected, index];
    setSelected(nextSelected);

    if (nextSelected.length === 2) {
      setLocked(true);
      setMoves((current) => current + 1);

      const first = cards[nextSelected[0]];
      const second = cards[nextSelected[1]];

      if (first.value === second.value) {
        setTimeout(() => {
          setCards((currentCards) =>
            currentCards.map((card, cardIndex) =>
              nextSelected.includes(cardIndex)
                ? { ...card, matched: true }
                : card,
            ),
          );

          setSelected([]);
          setLocked(false);
        }, 500);
      } else {
        setTimeout(() => {
          setSelected([]);
          setLocked(false);
        }, 900);
      }
    }
  };

  const resetGame = () => {
    setCards(createCards());
    setSelected([]);
    setMoves(0);
    setLocked(false);
  };

  useEffect(() => {
    if (completed) {
      setLocked(true);
    }
  }, [completed]);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-violet-500">
            Mini Activity
          </p>

          <h3 className="mt-1 text-xl font-semibold text-slate-950">
            Memory Match
          </h3>
        </div>

        <button
          onClick={resetGame}
          className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 transition hover:bg-slate-50"
        >
          <RotateCcw size={14} />
          Restart
        </button>
      </div>

      <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
        Flip the cards and find the matching pairs. A small example of how
        collaborative activities can live directly inside a therapy session.
      </p>

      {/* Stats */}
      <div className="mt-5 flex gap-3">
        <div className="rounded-xl bg-slate-50 px-4 py-2">
          <p className="text-[11px] text-slate-400">Moves</p>
          <p className="text-sm font-semibold text-slate-800">{moves}</p>
        </div>

        <div className="rounded-xl bg-slate-50 px-4 py-2">
          <p className="text-[11px] text-slate-400">Pairs</p>
          <p className="text-sm font-semibold text-slate-800">
            {matchedCount / 2} / 2
          </p>
        </div>
      </div>

      {/* Game */}
      <div className="mx-auto mt-6 grid max-w-md grid-cols-2 gap-4">
        {cards.map((card, index) => {
          const isVisible = selected.includes(index) || card.matched;

          return (
            <button
              key={card.id}
              onClick={() => handleCardClick(index)}
              disabled={locked || card.matched}
              className="h-28 [perspective:1000px]"
            >
              <motion.div
                animate={{ rotateY: isVisible ? 180 : 0 }}
                transition={{ duration: 0.45 }}
                className="relative h-full w-full [transform-style:preserve-3d]"
              >
                {/* Back */}
                <div className="absolute inset-0 flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-2xl shadow-sm [backface-visibility:hidden]">
                  ?
                </div>

                {/* Front */}
                <div className="absolute inset-0 flex items-center justify-center rounded-2xl border border-violet-200 bg-violet-50 text-4xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  {card.value}
                </div>
              </motion.div>
            </button>
          );
        })}
      </div>

      {/* Completion */}
      {completed && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-5 flex items-center gap-3 rounded-2xl bg-emerald-50 p-4 text-emerald-700"
        >
          <Trophy size={20} />

          <div>
            <p className="text-sm font-semibold">Activity complete!</p>

            <p className="text-xs text-emerald-600">
              Great work — both pairs matched.
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
