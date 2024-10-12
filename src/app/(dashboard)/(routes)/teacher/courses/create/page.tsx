"use client"

import * as z from 'zod';
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const formSchema = z.object({
    title: z.string().min(1, {
        message: 'Title is required'
    }),
})
type TformSchema = z.infer<typeof formSchema>;

const CreateCoursePage = () => {
    const form = useForm<TformSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
        }
    });
    const { isSubmitting, isValid } = form.formState;

    const router = useRouter();

    const onSubmit = async (data: TformSchema) => {
        try {
            const response = await axios.post('/api/courses', data);
            router.push(`/teacher/courses/${response.data.id}`);
            toast.success('Course created successfully');
        } catch (error) {
            toast.error('An error occurred. Please try again.');
        }
    }

    return ( 
        <div className='h-full max-w-5xl mx-auto flex md:items-center md:justify-center p-6' >
            <div>
                <h1 className='text-2xl'>
                    Name your course
                </h1>
                <p className='text-sm text-slate-600' >
                    What would you like to name your course? Don't worry, you can change this later.
                </p>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='space-y-8'
                    >
                        <FormField 
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Course Title
                                    </FormLabel>
                                    <FormControl>
                                        <Input 
                                            disabled={isSubmitting}
                                            placeholder="e.g. 'Advanced Web Development'"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        What will you teach in this course?
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className='flex items-center gap-x-2' >
                            <Link href="/">
                                <Button type="button" variant="ghost">
                                    Cancle
                                </Button>
                            </Link>
                            <Button type='submit' disabled={!isValid || isSubmitting} >
                                Submit
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
}
 
export default CreateCoursePage;