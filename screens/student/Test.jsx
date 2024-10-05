import { View, Text, TouchableOpacity,Image } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import GoBackHeader from "../../components/GoBackHeader";
import * as Progress from "react-native-progress";

export default function Test() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [bar1Progress, setBar1Progress] = useState(1); // Start at 100%
  const [timeLeft, setTimeLeft] = useState(20);
  const [answerStatus, setAnswerStatus] = useState(null); // Track answer status
  const [stopInterval, setStopInterval] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(false); // Track if all questions are answered
  const [isCorrect, setIsCorrect] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBar1Progress((prevProgress) => Math.max(0, prevProgress - 0.005));
    }, 100);

    if (stopInterval) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [stopInterval]);

  useEffect(() => {
    if (timeLeft === 0) {
      // Time's up, move to the next question
      nextQuestion();
    }
  }, [timeLeft]);

  
  const handleStop = () => {
    setStopInterval(true);
  }

  const nextQuestion = () => {
    if (currentQuestionIndex < example.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setBar1Progress(1); // Reset progress bar
      setTimeLeft(20); // Reset timer
      setAnswerStatus(null); // Reset answer status
      setStopInterval(false);
    } else {
      // Quiz ends, handle accordingly
      setShowCongratulations(true);
    }
  };

  const example = [
    {
        id: 1,
        question: "İtalik yazı hangi etiket sayesinde olur ?",
        answers: [
          { id: 1, text: "A - <p> etiketi", isCorrect: false },
          { id: 2, text: "B - <h6> etiketi", isCorrect: false },
          { id: 3, text: "C - <b> etiketi", isCorrect: false },
          { id: 4, text: "D - <i> etiketi", isCorrect: true },
        ],
      }, {
        id: 2,
        question: "Hangi tag bir alt satıra indirir ?",
        answers: [
          { id: 1, text: "A - <br> etiketi", isCorrect: true },
          { id: 2, text: "B - <body> etiketi", isCorrect: false },
          { id: 3, text: "C - <hr> etiketi", isCorrect: false },
          { id: 4, text: "D - <span> etiketi", isCorrect: false },
        ],
      }, {
        id: 3,
        question: "Bir sayfanın başlığı hangi etiketler arasına yazılır ?",
        answers: [
          { id: 1, text: "A - <hr> etiketi", isCorrect: false },
          { id: 2, text: "B - <title> etiketi", isCorrect: true },
          { id: 3, text: "C - <form> etiketi", isCorrect: false },
          { id: 4, text: "D - <body> etiketi", isCorrect: false },
        ],
      }, {
        id: 4,
        question: "Html de kayan yazı hangi etiket sayesinde olur ?",
        answers: [
          { id: 1, text: "A - <iframe>", isCorrect: false },
          { id: 2, text: "B - <input>", isCorrect: false },
          { id: 3, text: "C - <marquee>", isCorrect: true },
          { id: 4, text: "D - <p>", isCorrect: false },
        ],
      },
      {
        id: 5,
        question: "Aşağıdakilerden hangisi link oluşturur ?",
        answers: [
          { id: 1, text: "A - <br>", isCorrect: false },
          { id: 2, text: "B - <a>", isCorrect: true },
          { id: 3, text: "C - <link>", isCorrect: false },
          { id: 4, text: "D - <input>>", isCorrect: false },
        ],
      },
    // ... other questions
  ];


  const currentQuestion = example[currentQuestionIndex];
if(!showCongratulations)
  return (
    <View>
      <GoBackHeader />
      <View className="flex-row justify-center items-center mt-2">
        <Progress.Bar
          progress={bar1Progress}
          width={300}
          color={"#6CBA0E"}
          borderWidth={0}
          height={12}
          borderRadius={10}
          backgroundColor={"white"}
          className="ml-2"
        />
      </View>
      <View className="bg-white shadow shadow-gri rounded-md p-2 m-2 ">
        <Text className="font-nunitoSemiBold p-2">{currentQuestion.question}</Text>
      </View>

      {currentQuestion.answers.map((answer) => (
        <TouchableOpacity
          key={answer.id}
          className={`bg-white shadow shadow-gri rounded-md p-3 m-2 ${
            answerStatus === answer.id // Concise condition for styling
              ? answer.isCorrect
                ? "bg-green-500"
                : "bg-red-500"
              : ""
          }`}
          onPress={() => {
            setAnswerStatus(answer.id); // Update answer status immediately
            if (answer.isCorrect) {
              nextQuestion();
              setIsCorrect((prev) => prev + 1); // Increment correct answer count (implementation omitted
            } else {
              handleStop();
              // Handle incorrect answer logic
              // For example, show a message or deduct points (implementation omitted)
            }
          }}
        >
          <Text className="font-nunitoSemiBold p-2">{answer.text}</Text>
        </TouchableOpacity>
      ))}

    {
        stopInterval  && 
        <TouchableOpacity onPress={()=>nextQuestion()} className="self-end h-12 bg-purple items-center justify-center p-2 rounded-2xl mr-5 mt-5 ">
            <Text className="text-beyaz font-nunitoBold">Sonraki Soru</Text>
        </TouchableOpacity>
      }
    </View>
  );
  else{
    return(
        <View className="flex-1">
            <GoBackHeader/>
            <View className="flex-1 items-center justify-center">
                <Image source={require("../../assets/kingDucky.png")} className="w-40 h-40" resizeMode="contain"/>
                <View className="bg-white shadow shadow-gri rounded-xl p-2 m-2 w-[80%] h-24 justify-center items-center ">
                <Text className="font-nunitoExtraBold text-3xl text-orange-400">Tebrikleerr</Text>
                <Text className="font-nunitoBold text-base"> 5 sorudan {isCorrect} doğru yaptın</Text>
                </View>
           
            </View>
        </View>
    )
  }
}
