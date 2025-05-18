
import React from 'react';
import { Lesson } from '@/types/lms';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface CourseLessonListProps {
  lessons: Lesson[];
}

const CourseLessonList: React.FC<CourseLessonListProps> = ({ lessons }) => {
  return (
    <div className="mt-6">
      <h3 className="mb-4 text-xl font-semibold">Course Content</h3>
      <div className="mb-4 flex items-center text-sm text-muted-foreground">
        <span>{lessons.length} lessons</span>
        <span className="mx-2">•</span>
        <span>
          {lessons.reduce(
            (total, lesson) => {
              const [minutes] = lesson.duration.split(' ');
              return total + parseInt(minutes);
            },
            0
          )}{' '}
          minutes total
        </span>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {lessons.map((lesson, index) => (
          <AccordionItem key={lesson.id} value={lesson.id}>
            <AccordionTrigger className="hover:bg-muted/50 px-4 py-2 text-left">
              <div className="flex items-center">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-muted text-xs">
                  {index + 1}
                </span>
                <div>
                  <h4 className="font-medium">{lesson.title}</h4>
                  <p className="text-sm text-muted-foreground">{lesson.duration}</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 py-2">
              <p className="text-muted-foreground mb-2">{lesson.description}</p>
              <p>{lesson.content}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default CourseLessonList;
