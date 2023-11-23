import calculateRoleScore from "@/lib/calculateScore";
import { parseHTML } from "@/lib/parseHTML";
import { TableData } from "@/lib/types";
import { NextResponse } from "next/server";

export async function GET() {
  const filename = "Untitled.html";
  const playerData = parseHTML(filename);
  const roleScores = calculateRoleScore(playerData);
  const data: TableData[] = playerData.map((playerData, index) => ({
    Inf: playerData.Inf,
    Name: playerData.Name,
    Age: playerData.Age,
    Club: playerData.Club,
    "Transfer Value": playerData["Transfer Value"],
    Wage: playerData.Wage,
    Nat: playerData.Nat,
    Position: playerData.Position,
    Personality: playerData.Personality,
    "Media Handling": playerData["Media Handling"],
    "Left Foot": playerData["Left Foot"],
    "Right Foot": playerData["Right Foot"],
    Spd:
      (parseInt(playerData["Pac"] as string) +
        parseInt(playerData["Acc"] as string)) /
      2,
    Jum: Number(playerData["Jum"]),
    Str: Number(playerData["Str"]),
    Work:
      (parseInt(playerData["Wor"] as string) +
        parseInt(playerData["Sta"] as string)) /
      2,
    Height: playerData.Height,
    sks: Number(roleScores[index].sks),
    bpdd: Number(roleScores[index].bpdd),
    wbs: Number(roleScores[index].wbs),
    iwbs: Number(roleScores[index].iwbs),
    dmd: Number(roleScores[index].dmd),
    b2bs: Number(roleScores[index].b2bs),
    cma: Number(roleScores[index].cma),
    ws: Number(roleScores[index].ws),
    iwa: Number(roleScores[index].iwa),
    afa: Number(roleScores[index].afa),
  }));

  return NextResponse.json(data);
}
