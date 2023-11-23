// import {
//   ArrowDownIcon,
//   ArrowUpIcon,
//   CaretSortIcon,
// } from "@radix-ui/react-icons";
// import { Column } from "@tanstack/react-table";

// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";

// interface DataTableColumnHeaderProps<TData, TValue>
//   extends React.HTMLAttributes<HTMLDivElement> {
//   column: Column<TData, TValue>;
//   title: string;
// }

// export function DataTableColumnHeader<TData, TValue>({
//   column,
//   title,
//   className,
// }: DataTableColumnHeaderProps<TData, TValue>) {
//   if (!column.getCanSort()) {
//     return <div className={cn(className)}>{title}</div>;
//   }

//   return (
//     <div className={cn("flex items-center space-x-2", className)}>
//       <Button
//         variant="ghost"
//         size="sm"
//         className="-ml-3 h-8 data-[state=open]:bg-accent"
//         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//       >
//         <span>{title}</span>
//         {column.getIsSorted() === "desc" ? (
//           <ArrowDownIcon className="ml-2 h-[0.85rem] w-[0.85rem]" />
//         ) : column.getIsSorted() === "asc" ? (
//           <ArrowUpIcon className="ml-2 h-[0.85rem] w-[0.85rem]" />
//         ) : (
//           <CaretSortIcon className="ml-2 h-4 w-4" />
//         )}
//       </Button>
//     </div>
//   );
// }

import {
  ArrowDownIcon,
  ArrowUpIcon,
  CaretSortIcon,
  EyeNoneIcon,
  DrawingPinFilledIcon,
  DrawingPinIcon,
} from "@radix-ui/react-icons";
import { Column } from "@tanstack/react-table";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="-ml-3 h-8 data-[state=open]:bg-accent"
          >
            <span>{title}</span>
            {column.getIsSorted() === "desc" ? (
              <ArrowDownIcon className="ml-2 h-4 w-4" />
            ) : column.getIsSorted() === "asc" ? (
              <ArrowUpIcon className="ml-2 h-4 w-4" />
            ) : (
              <CaretSortIcon className="ml-2 h-4 w-4" />
            )}
            {column.getIsPinned() ? (
              <DrawingPinFilledIcon className="ml-2 h-4 w-4" />
            ) : (
              ''
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
            <ArrowUpIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Asc
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
            <ArrowDownIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Desc
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() =>
              column.getIsPinned() ? column.pin(false) : column.pin("left")
            }
          >
            {column.getIsPinned() ? (
              <DrawingPinFilledIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            ) : (
              <DrawingPinIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            )}
            {column.getIsPinned() ? 'Pinned' : 'Pin'}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
            <EyeNoneIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Hide
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
