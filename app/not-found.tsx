import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
        <h2 className="mb-4 text-2xl font-semibold">Página não encontrada</h2>
        <p className="mb-8 max-w-md text-muted-foreground">
          Não se desculpe, até os melhores dados às vezes se perdem na internet
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href={"/"}
            className="hover:bg:primary/80 flex items-center justify-center rounded-md bg-primary px-4 py-2 text-white transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Voltar para Dashboard
          </Link>
        </div>
      </div>
      <footer className="m-12 text-center text-xs text-muted-foreground">
        Se você acredita que isso é um erro, entre em contato com nossa equipe
        de suporte.
      </footer>
    </div>
  );
};

export default NotFoundPage;
