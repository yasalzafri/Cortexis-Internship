import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import "./flashcard.css";

export default function Flashcard({
    question = "What is the capital of France ?",
    answer = "Paris is the capital and most populous city of France. It's located in the north-central part of the country and is known for its art, fashion, gastronomy, and culture."
}) {
    const [showAnswer, setShowAnswer] = useState(false);

    const toggleAnswer = () => {
        setShowAnswer((prev) => !prev);
    };

    return (
        <div className="flashcard">
            {/* Question */}
            <h2 className="question">{question}</h2>

            {/* Toggle button */}
            <button className="toggle-btn" onClick={toggleAnswer}>
                {showAnswer ? <EyeOff size={18} /> : <Eye size={18} />}
                {showAnswer ? "Hide Answer" : "Show Answer"}
            </button>

            {/* Answer */}
            {showAnswer && <p className="answer">{answer}</p>}
        </div>
    );
}
