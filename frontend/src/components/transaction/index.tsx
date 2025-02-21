import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const demoTransaction = [
  {
    plan: "Premium Plan",
    date: "Jan 11,2050",
  },
  {
    plan: "Premium Plan",
    date: "Jan 11,2050",
  },
  {
    plan: "Premium Plan",
    date: "Jan 11,2050",
  },
  {
    plan: "Premium Plan",
    date: "Jan 11,2050",
  },
  {
    plan: "Premium Plan",
    date: "Jan 11,2050",
  },
  {
    plan: "Premium Plan",
    date: "Jan 11,2050",
  },
];

export const Transactions = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Transaction</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {demoTransaction.map((transaction, index) => (
          <TableRow
            className={` h-20 border-0 rounded-full text-lg text-black/70  ${
              index % 2 !== 0 && "bg-secondary"
            }`}
          >
            <TableCell className=" rounded-l-2xl pl-6">
              {transaction.plan}
            </TableCell>
            <TableCell>{transaction.date}</TableCell>
            <TableCell className="font-bold underline text-base rounded-r-2xl">
              View
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
