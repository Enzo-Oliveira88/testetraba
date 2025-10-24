import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  nome: z.string().trim().min(1, "Nome é obrigatório").max(100, "Nome muito longo"),
  email: z.string().trim().email("E-mail inválido").max(255, "E-mail muito longo"),
  telefone: z.string().trim().min(1, "Telefone é obrigatório").max(20, "Telefone muito longo"),
  mensagem: z.string().trim().min(1, "Mensagem é obrigatória").max(1000, "Mensagem muito longa"),
});

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
      setErrors({});
      
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
        toast.error("Por favor, corrija os erros no formulário.");
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Fale Conosco
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sua opinião e participação são fundamentais. Entre em contato e contribua 
            para construirmos juntos uma São Félix do Coribe cada vez melhor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulário */}
          <Card className="shadow-elegant animate-fade-in-up">
            <CardHeader>
              <CardTitle className="text-2xl">Envie sua Mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="nome">Nome Completo</Label>
                  <Input
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className={errors.nome ? "border-destructive" : ""}
                  />
                  {errors.nome && <p className="text-sm text-destructive mt-1">{errors.nome}</p>}
                </div>

                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    className={errors.telefone ? "border-destructive" : ""}
                  />
                  {errors.telefone && <p className="text-sm text-destructive mt-1">{errors.telefone}</p>}
                </div>

                <div>
                  <Label htmlFor="mensagem">Mensagem</Label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    rows={6}
                    className={errors.mensagem ? "border-destructive" : ""}
                  />
                  {errors.mensagem && <p className="text-sm text-destructive mt-1">{errors.mensagem}</p>}
                </div>

                <Button type="submit" size="lg" className="w-full font-semibold">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Informações de Contato */}
          <div className="space-y-6 animate-fade-in-up">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Endereço</p>
                    <p className="text-muted-foreground">
                      Prefeitura Municipal de São Félix do Coribe<br />
                      São Félix do Coribe - BA
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Telefone</p>
                    <p className="text-muted-foreground">(77) 0000-0000</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">E-mail</p>
                    <p className="text-muted-foreground">contato@prefeitura.ba.gov.br</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Horário de Atendimento</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-2">Segunda a Sexta</p>
                <p className="text-muted-foreground">8h às 12h | 14h às 18h</p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Redes Sociais</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Acompanhe as ações do Prefeito Toni de Dalmir nas redes sociais.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-gradient-primary text-primary-foreground rounded-full hover:opacity-80 transition-opacity"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-gradient-primary text-primary-foreground rounded-full hover:opacity-80 transition-opacity"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 bg-gradient-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Cada cidadão é parte essencial do nosso futuro
          </h2>
          <p className="text-lg max-w-3xl mx-auto opacity-95">
            Estamos aqui para ouvir você. Juntos, construímos uma cidade mais forte, 
            humana e feliz. Porque povo feliz é o maior legado que um gestor pode deixar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contato;
