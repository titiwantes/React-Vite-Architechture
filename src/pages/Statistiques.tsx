import AppLayout from "../layouts/AppLayout";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import {
  ArrowUp,
  DollarSign,
  Users,
  CreditCard,
  Activity,
  MoreHorizontal,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Button } from "@/components/ui/button";

const data = [
  { name: "Jan", total: 1200 },
  { name: "Fév", total: 1800 },
  { name: "Mar", total: 2200 },
  { name: "Avr", total: 1600 },
  { name: "Mai", total: 900 },
  { name: "Juin", total: 2800 },
  { name: "Juil", total: 4200 },
  { name: "Août", total: 4600 },
  { name: "Sep", total: 2000 },
  { name: "Oct", total: 4400 },
  { name: "Nov", total: 1800 },
  { name: "Déc", total: 4200 },
];

const userActivityData = [
  { day: "Lun", active: 500 },
  { day: "Mar", active: 650 },
  { day: "Mer", active: 800 },
  { day: "Jeu", active: 900 },
  { day: "Ven", active: 1100 },
  { day: "Sam", active: 950 },
  { day: "Dim", active: 700 },
];

export default function Statistiques() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Statistiques</h2>
          <div className="flex items-center space-x-2">
            <Button>Télécharger</Button>
            <Button variant="outline">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Revenu total
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45 231,89 €</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
                +20.1% par rapport au mois dernier
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Abonnements</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
                +180.1% par rapport au mois dernier
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ventes</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
                +19% par rapport au mois dernier
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Utilisateurs actifs
              </CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
                +201 depuis la dernière heure
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4 hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <CardTitle>Aperçu des revenus</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <ChartContainer
                config={{
                  total: {
                    label: "Total",
                    color: "hsl(var(--primary))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <XAxis
                      dataKey="name"
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => `${value}€`}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar
                      dataKey="total"
                      fill="hsl(var(--primary))"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
          <Card className="col-span-3 hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <CardTitle>Activité récente</CardTitle>
              <CardDescription>
                Utilisateurs actifs au cours des 7 derniers jours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  active: {
                    label: "Utilisateurs actifs",
                    color: "hsl(var(--primary))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={userActivityData}>
                    <XAxis
                      dataKey="day"
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => `${value}`}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="active"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
