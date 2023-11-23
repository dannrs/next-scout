import { TableData } from "./types";

// Define a configuration object for each role
const roleConfigurations: Record<
  string,
  { key: string[]; green: string[]; blue: string[] }
> = {
  sks: {
    key: ["Agi", "Ref"],
    green: ["Cmd", "Kic", "1v1", "Ant", "Cnt", "Pos"],
    blue: ["Aer", "Fir", "Han", "Pas", "TRO", "Dec", "Vis", "Acc"],
  },
  bpdd: {
    key: ["Acc", "Pac", "Jum", "Cmp"],
    green: ["Hea", "Mar", "Pas", "Tck", "Pos", "Str"],
    blue: ["Fir", "Tec", "Agg", "Ant", "Bra", "Cnt", "Dec", "Vis"],
  },
  wbs: {
    key: ['Acc', 'Pac', 'Sta', 'Wor'],
    green: ['Cro', 'Dri', 'Mar', 'Tck', 'OtB', 'Tea'],
    blue: ['Fir', 'Pas', 'Tec', 'Ant', 'Cnt', 'Dec', 'Pos', 'Agi', 'Bal']
  },
  iwbs: {
    key: ['Acc', 'Pac', 'Sta', 'Wor'],
    green: ['Fir', 'Pas', 'Tck', 'Cmp', 'Dec', 'Tea'],
    blue: ['Mar', 'Tec', 'Ant', 'Cnt', 'OtB', 'Pos', 'Vis', 'Agi']
  },
  dmd: {
    key: ['Wor', 'Sta', 'Acc', 'Pac'],
    green: ['Tck', 'Ant', 'Cnt', 'Pos', 'Tea'],
    blue: ['Mar', 'Pas', 'Agg', 'Cmp', 'Str', 'Dec']
  },
  b2bs: {
    key: ['Acc', 'Pac', 'Wor', 'Sta', ],
    green: ['Pas', 'Tck', 'OtB', 'Tea'],
    blue: ['Dri', 'Fin', 'Fir', 'Lon', 'Tec', 'Agg', 'Ant', 'Cmp', 'Dec', 'Pos', 'Bal', 'Str']
  },
  cma: {
    key: ['Acc', 'Pac', 'Wor', 'Sta', ],
    green: ['Fir','Pas', 'Dec', 'OtB'],
    blue: ['Lon', 'Tck', 'Tec', 'Ant', 'Cmp', 'Tea', 'Vis']
  },
  iwa: {
    key: ['Acc', 'Pac', 'Wor', 'Sta', ],
    green: ['Cro', 'Dri', 'Pas', 'Tec', 'Agi'],
    blue: ['Fir', 'Lon', 'Ant', 'Cmp', 'Dec', 'Fla', 'OtB', 'Vis', 'Bal']
  },
  ws: {
    key: ['Acc', 'Pac', 'Wor', 'Sta', ],
    green: ['Cro', 'Dri', 'Tec', 'Agi'],
    blue: ['Fir', 'Pas', 'OtB', 'Bal']
  },
  afa: {
    key: ['Acc', 'Pac', 'Fin' ],
    green: ['Dri', 'Fir', 'Tec', 'Cmp', 'OtB'],
    blue: ['Pas', 'Ant', 'Dec', 'Wor', 'Agi', 'Bal', 'Sta',]
  },
};

// Function to calculate role score for a specific role
const calculateRoleScoreForRole = (
  player: TableData,
  roleConfig: { key: string[]; green: string[]; blue: string[] }
): number => {
  const att_key = roleConfig.key.reduce(
    (sum, attribute) => sum + (parseFloat(player[attribute] as string) || 0),
    0
  );
  const att_green = roleConfig.green.reduce(
    (sum, attribute) => sum + (parseFloat(player[attribute] as string) || 0),
    0
  );
  const att_blue = roleConfig.blue.reduce(
    (sum, attribute) => sum + (parseFloat(player[attribute] as string) || 0),
    0
  );

  // Calculate the total weight based on the weights assigned to each color
  const totalWeight =
    roleConfig.key.length * 5 +
    roleConfig.green.length * 3 +
    roleConfig.blue.length * 1;

  return (att_key * 5 + att_green * 3 + att_blue * 1) / totalWeight;
};

// Function to calculate role score for all roles
const calculateRoleScore = (
  data: TableData[]
): Record<string, string | number>[] => {
  const result: Record<string, string | number>[] = [];

  // Iterate over each player
  for (const player of data) {
    // Create a new object to store the calculated scores
    const calculatedScores: Record<string, string | number> = { ...player };

    // Iterate over each role configuration
    for (const [role, config] of Object.entries(roleConfigurations)) {
      // Calculate role score for the current player and role
      const score = calculateRoleScoreForRole(player, config);
      // Add the calculated score to the new object
      calculatedScores[role] = score.toFixed(1);
    }

    // Add the calculated scores for the current player to the result array
    result.push(calculatedScores);
  }

  return result;
};

export default calculateRoleScore;
