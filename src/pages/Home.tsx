import AppLayout from "../layouts/AppLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Users, DollarSign, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <AppLayout>
      <div className="p-6 space-y-6 md:p-10">
        <h1 className="text-3xl font-bold tracking-tight">
          Bienvenue sur le tableau de bord
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Revenus totaux
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45,231.89€</div>
              <p className="text-xs text-muted-foreground">
                +20.1% par rapport au mois dernier
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Nouveaux utilisateurs
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-muted-foreground">
                +180.1% par rapport au mois dernier
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ventes</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground">
                +19% par rapport au mois dernier
              </p>
            </CardContent>
          </Card>
        </div>
        <Card className="hover:shadow-lg transition-shadow duration-200">
          <CardHeader>
            <CardTitle>Activité récente</CardTitle>
            <CardDescription>
              Voici un aperçu des dernières activités sur la plateforme.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                "Nouvel utilisateur inscrit : Marie Dupont",
                "Commande #1234 complétée",
                "Nouveau produit ajouté : XYZ",
                "Mise à jour du profil utilisateur : Jean Martin",
                "Nouveau commentaire sur le produit ABC",
              ].map((activity, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                  <p className="text-sm">{activity}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="flex justify-end">
          <Link to="/stats">
            <Button>
              Voir plus de statistiques
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </AppLayout>
  );
}
