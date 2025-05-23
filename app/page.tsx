import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const contract = "0x0000000000000000000000000000000000000000";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contract);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-500 to-pink-600 text-white font-sans">
      <header className="flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold">Mother's Love</h1>
        <nav className="flex gap-4 text-sm">
          <a href="#" className="hover:underline">Telegram</a>
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">Dexscreener</a>
        </nav>
      </header>

      <main className="text-center py-20 px-6 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          O amor mais puro agora é cripto 💖
        </h2>
        <p className="mb-6 text-lg">
          Uma moeda sem taxas, de dono renunciado, feita para a comunidade. 1 bilhão de MAE tokens de puro carinho.
        </p>
        <Button className="bg-white text-pink-600 font-bold hover:bg-pink-100 transition">Buy on PancakeSwap</Button>

        <div className="mt-8 flex items-center justify-center gap-2 bg-white text-pink-600 px-4 py-2 rounded-xl">
          <span className="text-sm font-mono">{contract}</span>
          <Copy size={18} onClick={copyToClipboard} className="cursor-pointer" />
          {copied && <span className="text-xs ml-2">Copiado!</span>}
        </div>
      </main>

      <section className="bg-white text-pink-700 px-6 py-12">
        <h3 className="text-3xl font-bold text-center mb-6">Sobre o Projeto</h3>
        <p className="text-center max-w-2xl mx-auto">
          "Mother’s Love (MAE) é mais do que uma moeda – é um símbolo de proteção, confiança e comunidade. Com propriedade renunciada e nenhuma taxa, MAE é 100% dedicada a quem acredita no poder do amor verdadeiro."
        </p>
      </section>

      <section className="bg-pink-100 text-pink-800 px-6 py-12">
        <h3 className="text-3xl font-bold text-center mb-6">Tokenomics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
          <Card>
            <CardContent className="p-4">
              <h4 className="font-bold text-xl">Total Supply</h4>
              <p>1,000,000,000 MAE</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h4 className="font-bold text-xl">Taxa</h4>
              <p>0%</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h4 className="font-bold text-xl">Dono</h4>
              <p>Renunciado</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="text-center py-6 text-sm text-pink-200">
        © 2025 Mother’s Love. Todos os direitos reservados.
      </footer>
    </div>
  );
}
