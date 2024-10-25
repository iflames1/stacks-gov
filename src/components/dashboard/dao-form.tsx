"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Camera } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import Button from "../common/button";

interface FormValues {
  name: string;
  username: string;
  profilePic: File | null;
}

export default function DaoForm() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const form = useForm({
    defaultValues: {
      name: "",
      username: "",
      profilePic: null,
    },
  });

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: (file: File) => void
  ) => {
    const files = e.target.files;
    if (!files) return;
    const file = files[0];
    if (file) {
      onChange(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImagePreview(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/70 text-sm font-semibold">
                Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter DAO name"
                  className="bg-white/[0.03] placeholder:text-white/30 text-sm"
                  {...field}
                />
              </FormControl>
              {/*<FormDescription>Choose a name for your DAO</FormDescription>*/}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/70 text-sm font-semibold">
                Username
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter username"
                  className="bg-white/[0.03] placeholder:text-white/30 text-sm"
                  {...field}
                />
              </FormControl>
              {/*<FormDescription>
                Choose a unique username for your DAO
              </FormDescription>*/}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="profilePic"
          render={({ field: { onChange, value, ...field } }) => (
            <FormItem>
              <FormLabel className="text-white/70 text-sm font-semibold">
                Profile Picture
              </FormLabel>
              <FormControl>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-24 h-24 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                      {imagePreview ? (
                        <Image
                          src={imagePreview}
                          alt="Profile preview"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Camera className="w-8 h-8 text-gray-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e, onChange)}
                        {...field}
                      />
                    </div>
                  </div>
                </div>
              </FormControl>
              <FormDescription>
                Upload a profile picture for your DAO
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button asChild={true}>
          <button
            type="submit"
            className="w-full bg-button-gradient py-3 gap-2 rounded-[2px]"
          >
            {/*<FaPlus />
            <span>Create a DAO</span>*/}
            Submit
          </button>
        </Button>
      </form>
    </Form>
  );
}
