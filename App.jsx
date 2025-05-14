import React, { useState } from "react";

export default function AutoPriceCalculator() {
  const [country, setCountry] = useState("");
  const [budget, setBudget] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [estimatedPrice, setEstimatedPrice] = useState(null);

  const handleCalculate = () => {
    if (!country || !budget || !bodyType) return;
    const base = parseInt(budget);
    let multiplier = 1.0;

    if (country === "USA") multiplier += 0.2;
    if (country === "Japan") multiplier += 0.15;
    if (country === "Germany") multiplier += 0.1;

    const result = Math.round(base * multiplier);
    setEstimatedPrice(result);
  };

  return (
    <div className="w-full h-screen p-4 flex flex-col gap-4 items-center justify-center bg-gray-900 text-white">
      <h1 className="text-xl font-bold">Расчёт стоимости авто под пригон</h1>

      <select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="p-2 rounded bg-gray-800 border border-gray-600"
      >
        <option value="">Выберите страну</option>
        <option value="USA">США</option>
        <option value="Japan">Япония</option>
        <option value="Germany">Германия</option>
      </select>

      <select
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        className="p-2 rounded bg-gray-800 border border-gray-600"
      >
        <option value="">Выберите бюджет</option>
        <option value="1000000">До 1 млн ₽</option>
        <option value="1500000">До 1.5 млн ₽</option>
        <option value="2000000">До 2 млн ₽</option>
      </select>

      <select
        value={bodyType}
        onChange={(e) => setBodyType(e.target.value)}
        className="p-2 rounded bg-gray-800 border border-gray-600"
      >
        <option value="">Тип кузова</option>
        <option value="sedan">Седан</option>
        <option value="suv">Кроссовер</option>
        <option value="hatchback">Хэтчбек</option>
      </select>

      <button
        onClick={handleCalculate}
        className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
      >
        Рассчитать
      </button>

      {estimatedPrice && (
        <div className="mt-4 text-lg">
          💰 Оценочная стоимость авто под ключ: <strong>{estimatedPrice.toLocaleString()} ₽</strong>
        </div>
      )}
    </div>
  );
}
