"use client";

import * as z from "zod";
import axios from "axios";
import MuxPlayer from "@mux/mux-player-react";
import { Button } from "@/components/ui/button";
import { Pencil, PlusCircle, Video } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Chapter, MuxData } from "@prisma/client";
import { FileUpload } from "@/components/FileUpload";

const formSchema = z.object({
  videoUrl: z.string().min(1),
});
type TformSchema = z.infer<typeof formSchema>;

interface ChapterVideoFormUploadProps {
  initialData: Chapter & { muxData?: MuxData | null };
  courseId: string;
  chapterId: string;
}

const ChapterVideoForm = ({
  initialData,
  courseId,
  chapterId,
}: ChapterVideoFormUploadProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const router = useRouter();

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const onSubmit = async (data: TformSchema) => {
    try {
      const response = await axios.patch(
        `/api/courses/${courseId}/chapters/${chapterId}`,
        data
      );
      toast.success("Chapter updated successfully");
      toggleEdit();
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Chapter Video Form: ", error);
    }
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Course Video
        <Button onClick={toggleEdit} variant={"ghost"}>
          {isEditing && <>Cancel</>}
          {!isEditing && !initialData.videoUrl && (
            <>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add a Video
            </>
          )}
          {!isEditing && initialData.videoUrl && (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit Video
            </>
          )}
        </Button>
      </div>
      {!isEditing &&
        (!initialData.videoUrl ? (
          <div className="flex justify-center items-center h-60 bg-slate-200 rounded-md">
            <Video className="h-10 w-10 text-slate-500" />
          </div>
        ) : (
          <div className="relative aspect-video mt-2">
            <MuxPlayer playbackId={initialData?.muxData?.playbackId || ""} />
          </div>
        ))}
      {isEditing && (
        <div>
          <FileUpload
            endpoint="chapterVideo"
            onChange={(url) => {
              if (url) {
                onSubmit({ videoUrl: url });
              }
            }}
          />
          <div className="text-xs text-muted-foreground mt-4">
            Upload the chapter Video
          </div>
        </div>
      )}
      {initialData.videoUrl && !isEditing && (
        <div className="text-xs text-muted-foreground mt-2">
          Videos can take a few minutes to process. Reload the page if the video
          does not appear.
        </div>
      )}
    </div>
  );
};

export default ChapterVideoForm;
