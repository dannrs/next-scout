"use client";

import { DataTableColumnHeader } from "@/components/table-header";
import { TableData } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<TableData>[] = [
  {
    accessorKey: "Inf",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Inf" />
    ),
  },
  {
    accessorKey: "Name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    
  },
  {
    accessorKey: "Age",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Age" />
    ),
  },
  {
    accessorKey: "Club",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Club" />
    ),
  },
  {
    accessorKey: "Transfer Value",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Transfer Value" />
    ),
  },
  {
    accessorKey: "Wage",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Wage" />
    ),
  },
  {
    accessorKey: "Nat",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nat" />
    ),
  },
  {
    accessorKey: "Position",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Position" />
    ),
  },
  {
    accessorKey: "Personality",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Personality" />
    ),
  },
  {
    accessorKey: "Media Handling",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Media Handling" />
    ),
  },
  {
    accessorKey: "Left Foot",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Left Foot" />
    ),
  },
  {
    accessorKey: "Right Foot",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Right Foot" />
    ),
  },
  {
    accessorKey: "Spd",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Spd" />
    ),
  },
  {
    accessorKey: "Jum",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Jum" />
    ),
  },
  {
    accessorKey: "Str",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Str" />
    ),
  },
  {
    accessorKey: "Work",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Wor" />
    ),
  },
  {
    accessorKey: "Height",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Height" />
    ),
  },
  {
    accessorKey: "sks",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="sks" />
    ),
  },
  {
    accessorKey: "bpdd",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="bpdd" />
    ),
  },
  {
    accessorKey: "wbs",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="wbs" />
    ),
  },
  {
    accessorKey: "iwbs",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="iwbs" />
    ),
  },
  {
    accessorKey: "dmd",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="dmd" />
    ),
  },
  {
    accessorKey: "b2bs",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="b2bs" />
    ),
  },
  {
    accessorKey: "cma",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="cma" />
    ),
  },
  {
    accessorKey: "ws",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ws" />
    ),
  },
  {
    accessorKey: "iwa",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="iwa" />
    ),
  },
  {
    accessorKey: "afa",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="afa" />
    ),
  },
];
