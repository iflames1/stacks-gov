import React from "react";
import { useForm } from "react-hook-form";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Button from "../common/button";
import { Textarea } from "@/components/ui/textarea";

interface FormValues {
  topic: string;
  description: string;
  votingType: string;
}

const votingTypes = {
  "token-based": {
    label: "Token-based Quorum",
    description: "Utilizes a (governance) token voting system",
  },
  "quorum-voting": {
    label: "Quorum Voting",
    description:
      "Requires a predetermined level of voters to vote in favor of a proposal for it to pass",
  },
  "wallet-based": {
    label: "Wallet-based Voting",
    description:
      "Authorizes specific wallets to make decisions on behalf of the DAO",
  },
} as const;

export default function ProposalForm() {
  const form = useForm<FormValues>({
    defaultValues: {
      topic: "",
      description: "",
      votingType: "",
    },
  });

  const selectedVotingType = form.watch("votingType");

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/70 text-sm font-semibold">
                Topic
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter proposal topic"
                  className="bg-white/[0.03] placeholder:text-white/30 text-sm"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/70 text-sm font-semibold">
                Description
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter proposal description"
                  className="bg-white/[0.03] placeholder:text-white/30 text-sm min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="votingType"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="text-white/70 text-sm font-semibold">
                Voting Type
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-white/[0.03] text-sm">
                    <SelectValue placeholder="Select voting type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.entries(votingTypes).map(([value, { label }]) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {selectedVotingType && (
                <div className="rounded-md border border-white/10 p-4 bg-white/[0.02]">
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">
                      {
                        votingTypes[
                          selectedVotingType as keyof typeof votingTypes
                        ].label
                      }
                    </h4>
                    <p className="text-sm text-white/60">
                      {
                        votingTypes[
                          selectedVotingType as keyof typeof votingTypes
                        ].description
                      }
                    </p>
                  </div>
                </div>
              )}
              <FormMessage />
            </FormItem>
          )}
        />

        <Button asChild={true}>
          <button
            type="submit"
            className="w-full bg-button-gradient py-3 gap-2 rounded-[2px]"
          >
            Submit
          </button>
        </Button>
      </form>
    </Form>
  );
}
