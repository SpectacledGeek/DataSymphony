"use client"

import * as z from 'zod';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { File, Loader2, PlusCircle, X } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { Attachment, Course } from '@prisma/client';
import { FileUpload } from '@/components/FileUpload';

const formSchema = z.object({
    url: z.string().min(1),
})
type TformSchema = z.infer<typeof formSchema>;

interface AttachmentFormProps {
    initialData: Course & { attachments: Attachment[] }
    courseId: string;
}

const AttachmentForm = ({ initialData, courseId }: AttachmentFormProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [deletingId, setDeletingId] = useState<string | null>(null);

    const router = useRouter();

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    }

    const onSubmit = async (data: TformSchema) => {
        try {
            const response = await axios.post(`/api/courses/${courseId}/attachments`, data);
            toast.success('Course updated successfully');
            toggleEdit();
            router.refresh();
        } catch (error) {
            toast.error('Something went wrong. Please try again.');
            console.error( "Description Form: " ,error);
        }
    }

    const onDelete = async (id: string) => {
        setDeletingId(id);
        try {
            await axios.delete(`/api/courses/${courseId}/attachments/${id}`);
            toast.success('Attachment deleted successfully');
            router.refresh();
        } catch (error) {
            toast.error('Something went wrong. Please try again.');
            console.error( "Description Form: " ,error);
        } finally {
            setDeletingId(null);
        }
    }

    return ( 
        <div className='mt-6 border bg-slate-100 rounded-md p-4' >
            <div className='font-medium flex items-center justify-between' >
                Course Attachments
                <Button onClick={toggleEdit} variant={"ghost"} >
                    {isEditing && (
                        <>Cancel</>
                    )}
                    {!isEditing && (
                        <>
                            <PlusCircle className='h-4 w-4 mr-2' />
                            Add a file
                        </>
                    )}
                </Button>
            </div>
            {!isEditing && (
                <>
                    {initialData.attachments.length === 0 ? (
                        <p className='text-sm mt-2 text-slate-500 italic' >
                            No attachments yet
                        </p>
                    ): (
                        <div className='space-y-2' >
                            {initialData.attachments.map((attachment) => (
                                <div
                                    key={attachment.id}
                                    className='flex items-center p-3 w-full bg-sky-100 border-sky-200 border text-sky-700 rounded-md'
                                >
                                    <File className="h-4 w-4 mr-2 flex-shrink-0" />
                                    <p className='text-xs line-clamp-1' >{attachment.name}</p>
                                    {deletingId === attachment.id ? (
                                        <div className='ml-auto' >
                                            <Loader2 className='h-4 w-4 animate-spin' />
                                        </div>
                                    ): (
                                        <button 
                                            onClick={() => onDelete(attachment.id)}
                                            className='ml-auto hover:opacity-75 transition' 
                                        >
                                            <X className='h-4 w-4' />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </>
            )} 
            {isEditing && (
                <div>
                    <FileUpload 
                        endpoint='courseAttachments'
                        onChange={(url) => {
                            if(url) {
                                onSubmit({ url });
                            }
                        }}
                    />
                    <div className='text-xs text-muted-foreground mt-4' >
                        Add anything your students might to complete the course.
                    </div>
                </div>
            )}
        </div>
    );
}
 
export default AttachmentForm;