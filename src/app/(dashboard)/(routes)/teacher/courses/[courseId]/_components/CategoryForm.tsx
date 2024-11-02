"use client"

import * as z from 'zod';
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Pencil } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Course } from '@prisma/client';
import { Combobox } from '@/components/ui/combobox';

const formSchema = z.object({
    categoryId: z.string().min(1)
})
type TformSchema = z.infer<typeof formSchema>;

interface CategoryFormProps {
    initialData: Course
    courseId: string;
    options: { label: string, value: string }[]
}

const CategoryForm = ({ initialData, courseId, options }: CategoryFormProps) => {
    const [isEditing, setIsEditing] = useState(false);

    const router = useRouter();

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    }

    const form = useForm<TformSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            categoryId: initialData?.categoryId || ""
        }
    });
    const { isSubmitting, isValid } = form.formState;

    const onSubmit = async (data: TformSchema) => {
        try {
            const response = await axios.patch(`/api/courses/${courseId}`, data);
            toast.success('Course updated successfully');
            toggleEdit();
            router.refresh();
        } catch (error) {
            toast.error('Something went wrong. Please try again.');
            console.error( "Description Form: " ,error);
        }
    }

    const selectedOptions = options.find(option => option.value === initialData.categoryId);

    return ( 
        <div className='mt-6 border bg-slate-100 rounded-md p-4' >
            <div className='font-medium flex items-center justify-between' >
                Course Category
                <Button onClick={toggleEdit} variant={"ghost"} >
                    {isEditing ? (
                        <>Cancel</>
                    ) : (
                        <>
                            <Pencil className='h-4 w-4 mr-2' />
                            Edit Category
                        </>
                    )}
                </Button>
            </div>
            {!isEditing ? (
                <div className={cn(
                    "text-sm mt-2",
                    !initialData.categoryId && 'text-slate-500 italic'
                )} >
                    {selectedOptions?.label || "No category"}
                </div>
            ) : (
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='space-y-4 mt-4'
                    >
                        <FormField
                            control={form.control}
                            name="categoryId"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Combobox 
                                            options={...options}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className='flex items-center gap-x-2' >
                            <Button
                                disabled={!isValid || isSubmitting}
                                type="submit"
                            >
                                Save
                            </Button>
                        </div>
                    </form>
                </Form>    
            )}
        </div>
    );
}
 
export default CategoryForm;