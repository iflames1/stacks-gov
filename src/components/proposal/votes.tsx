import { PROPOSAL } from "@/types/dao";
import Image from "next/image";
import { LuCopy } from "react-icons/lu";

export default function Votes({ proposal }: { proposal: PROPOSAL }) {
  return (
    <div className="pl-[2.7%] pt-[2.7%]">
      <div className="bg-white/[0.03] border border-white/15 rounded-lg">
        <p className="font-jost text-xl p-6">
          <span className="font-semibold">Votes</span>{" "}
          <span className="font-normal">(10,000)</span>
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-white/[0.03] text-left">
              <tr>
                <th className="p-4">User</th>
                <th className="p-4">Voting</th>
                <th className="p-4">Votes</th>
                <th className="p-4">Voting Power</th>
              </tr>
            </thead>
            <tbody className="w-full">
              <tr>
                <td className="flex items-center gap-4 px-4 py-3">
                  <Image
                    src={proposal.author_dp}
                    alt={proposal.author}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <p className="text-white/50 text-base font-semibold flex items-center gap-2 cursor-pointer">
                    <span>iflames.btc</span>
                    <LuCopy />
                  </p>
                </td>
                <td className="text-teal text-sm font-semibold px-4 py-3">
                  Approved
                </td>
                <td className="text-white/50 text-sm font-semibold px-4 py-3">
                  700k $SGV
                </td>
                <td className="text-white/50 text-sm font-semibold px-4 py-3">
                  5.0%
                </td>
              </tr>
              <tr>
                <td className="flex items-center gap-4 px-4 py-3">
                  <Image
                    src={proposal.author_dp}
                    alt={proposal.author}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <p className="text-white/50 text-base font-semibold flex items-center gap-2 cursor-pointer">
                    <span>enyi.btc</span>
                    <LuCopy />
                  </p>
                </td>
                <td className="text-teal text-sm font-semibold px-4 py-3">
                  Approved
                </td>
                <td className="text-white/50 text-sm font-semibold px-4 py-3">
                  435k $SGV
                </td>
                <td className="text-white/50 text-sm font-semibold px-4 py-3">
                  5.0%
                </td>
              </tr>
              <tr>
                <td className="flex items-center gap-4 px-4 py-3">
                  <Image
                    src={proposal.author_dp}
                    alt={proposal.author}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <p className="text-white/50 text-base font-semibold flex items-center gap-2 cursor-pointer">
                    <span>hazyoflele.btc</span>
                    <LuCopy />
                  </p>
                </td>
                <td className="text-teal text-sm font-semibold px-4 py-3">
                  Approved
                </td>
                <td className="text-white/50 text-sm font-semibold px-4 py-3">
                  410k $SGV
                </td>
                <td className="text-white/50 text-sm font-semibold px-4 py-3">
                  5.0%
                </td>
              </tr>
              <tr>
                <td className="flex items-center gap-4 px-4 py-3">
                  <Image
                    src={proposal.author_dp}
                    alt={proposal.author}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <p className="text-white/50 text-base font-semibold flex items-center gap-2 cursor-pointer">
                    <span>idcrypto.btc</span>
                    <LuCopy />
                  </p>
                </td>
                <td className="text-red-500 text-sm font-semibold px-4 py-3">
                  Disapproved
                </td>
                <td className="text-white/50 text-sm font-semibold px-4 py-3">
                  399k $SGV
                </td>
                <td className="text-white/50 text-sm font-semibold px-4 py-3">
                  5.0%
                </td>
              </tr>
              <tr>
                <td className="flex items-center gap-4 px-4 py-3">
                  <Image
                    src={proposal.author_dp}
                    alt={proposal.author}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <p className="text-white/50 text-base font-semibold flex items-center gap-2 cursor-pointer">
                    <span>oak_.btc</span>
                    <LuCopy />
                  </p>
                </td>
                <td className="text-teal text-sm font-semibold px-4 py-3">
                  Approved
                </td>
                <td className="text-white/50 text-sm font-semibold px-4 py-3">
                  200k $SGV
                </td>
                <td className="text-white/50 text-sm font-semibold px-4 py-3">
                  5.0%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
