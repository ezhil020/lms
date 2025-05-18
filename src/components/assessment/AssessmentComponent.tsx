
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Assessment } from '@/types/lms';
import { useToast } from "@/components/ui/use-toast";

interface AssessmentComponentProps {
  assessment: Assessment;
  onComplete?: (score: number, passed: boolean) => void;
}

const AssessmentComponent: React.FC<AssessmentComponentProps> = ({ assessment, onComplete }) => {
  const { toast } = useToast();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentQuestion = assessment.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === assessment.questions.length - 1;
  
  const handleAnswerSelect = (optionId: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: optionId });
  };

  const handleNext = () => {
    if (isLastQuestion) {
      handleSubmit();
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    
    assessment.questions.forEach(question => {
      const selectedOptionId = answers[question.id];
      if (selectedOptionId) {
        const selectedOption = question.options.find(option => option.id === selectedOptionId);
        if (selectedOption?.isCorrect) {
          correctAnswers++;
        }
      }
    });
    
    return {
      score: Math.round((correctAnswers / assessment.questions.length) * 100),
      correctAnswers,
      totalQuestions: assessment.questions.length
    };
  };
  
  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      // In a real app, you would call an API to submit the assessment
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const result = calculateScore();
      const passed = result.score >= assessment.passingScore;
      
      setShowResults(true);
      
      if (onComplete) {
        onComplete(result.score, passed);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit assessment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const result = showResults ? calculateScore() : null;
  const passed = result ? result.score >= assessment.passingScore : false;

  if (showResults) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Assessment Results</CardTitle>
          <CardDescription>
            {assessment.title}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-center py-8">
            <div className="relative flex h-40 w-40 items-center justify-center rounded-full">
              <svg className="h-full w-full" viewBox="0 0 100 100">
                <circle
                  className="text-muted stroke-current"
                  strokeWidth="10"
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                />
                <circle
                  className={`progress-ring stroke-current ${
                    passed ? "text-lms-success" : "text-lms-error"
                  }`}
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 40} ${2 * Math.PI * 40}`}
                  strokeDashoffset={`${2 * Math.PI * 40 * (1 - result.score / 100)}`}
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                />
              </svg>
              <div className="absolute text-center">
                <div className="text-3xl font-bold">{result.score}%</div>
                <div className="text-sm text-muted-foreground">Your Score</div>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-muted p-4">
            <div className="grid gap-1">
              <div className="flex justify-between">
                <span>Correct Answers:</span>
                <span className="font-semibold">{result.correctAnswers} / {result.totalQuestions}</span>
              </div>
              <div className="flex justify-between">
                <span>Passing Score:</span>
                <span className="font-semibold">{assessment.passingScore}%</span>
              </div>
              <div className="flex justify-between">
                <span>Status:</span>
                <span className={`font-semibold ${passed ? "text-lms-success" : "text-lms-error"}`}>
                  {passed ? "PASSED" : "FAILED"}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => {
            setShowResults(false);
            setCurrentQuestionIndex(0);
            setAnswers({});
          }}>
            Retake Assessment
          </Button>
          <Button onClick={() => window.history.back()}>
            Back to Course
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{assessment.title}</CardTitle>
        <CardDescription>{assessment.description}</CardDescription>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm font-medium">
            Question {currentQuestionIndex + 1} of {assessment.questions.length}
          </span>
          <span className="text-sm text-muted-foreground">
            Passing score: {assessment.passingScore}%
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">{currentQuestion.text}</h3>
          <RadioGroup
            value={answers[currentQuestion.id] || ""}
            onValueChange={handleAnswerSelect}
          >
            <div className="space-y-2">
              {currentQuestion.options.map((option) => (
                <div
                  key={option.id}
                  className="flex items-center space-x-2 rounded border p-3 hover:bg-muted"
                >
                  <RadioGroupItem value={option.id} id={option.id} />
                  <Label htmlFor={option.id} className="flex-grow cursor-pointer">
                    {option.text}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </Button>
        <Button
          onClick={handleNext}
          disabled={!answers[currentQuestion.id] || isSubmitting}
        >
          {isLastQuestion ? (isSubmitting ? "Submitting..." : "Submit") : "Next"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AssessmentComponent;
