
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function TerraformCourse() {
  const [module, setModule] = useState(0);

  const modules = [
    {
      title: "Módulo 1: Fundamentos de Terraform",
      content: `### O que é IaC (Infraestrutura como Código)
Infraestrutura como Código é a prática de gerenciar infraestrutura (como servidores, redes, balanceadores de carga, firewalls e outros componentes de TI) por meio de arquivos de configuração que são legíveis por humanos. Ao invés de executar comandos manuais, você descreve o estado desejado da sua infraestrutura e ferramentas como o Terraform cuidam de criá-la, modificá-la ou destruí-la automaticamente.

**Benefícios:**
- Reprodutibilidade: mesma infraestrutura em múltiplos ambientes
- Versionamento: use Git para rastrear alterações na infraestrutura
- Automação: permite integração com pipelines de CI/CD
- Escalabilidade e padronização

### Por que Terraform?
Terraform é uma ferramenta declarativa desenvolvida pela HashiCorp e se destaca por:
- Ser **multi-cloud** (AWS, GCP, Azure, Oracle Cloud, etc.)
- Utilizar **código declarativo** em HCL (HashiCorp Configuration Language)
- Ter **grande ecossistema de módulos** reutilizáveis
- Ser **open source** com versão empresarial para times grandes

### Arquitetura do Terraform
- **Providers**: plugins para interagir com APIs dos provedores (ex: AWS, Google Cloud, Azure)
- **Resources**: blocos que representam objetos a serem criados (ex: aws_instance, google_storage_bucket)
- **Modules**: conjuntos de recursos reutilizáveis como "blocos de Lego"
- **State**: arquivo que armazena o estado real da infraestrutura
- **Backend**: define onde e como o state será salvo (local, S3, etc.)

### Ciclo de Vida Básico com Comandos Essenciais
- \`terraform init\`: inicializa o projeto e baixa os providers
- \`terraform plan\`: mostra o que será criado/modificado/destruído
- \`terraform apply\`: aplica as mudanças reais
- \`terraform destroy\`: destrói toda a infraestrutura gerenciada

### Fluxo Resumido de Uso:
1. Escreva código em arquivos .tf (ex: main.tf)
2. Rode \`terraform init\`
3. Execute \`terraform plan\` para visualizar alterações
4. Execute \`terraform apply\` para aplicar alterações

### Quiz Interativo #1
**Pergunta 1:** O que é um provider no Terraform?
A) Um tipo de variável
B) Um recurso reutilizável
C) Um plugin que permite interação com uma API de serviço
D) Uma linguagem de programação

**Pergunta 2:** Qual comando inicializa um projeto Terraform?
A) \`terraform plan\`
B) \`terraform start\`
C) \`terraform init\`
D) \`terraform setup\`

**Pergunta 3:** O que o comando \`terraform apply\` faz?
A) Mostra o que será alterado sem aplicar
B) Aplica as alterações definidas no plano
C) Reinicia o Terraform
D) Remove toda a infraestrutura

**Pergunta 4:** Qual das opções representa uma vantagem do Terraform?
A) Executa código imperativo
B) Compatibilidade apenas com AWS
C) Interface gráfica por padrão
D) Suporte a múltiplas clouds e modularização

**Pergunta 5:** O que é o state no Terraform?
A) Um banco de dados relacional
B) Um arquivo que representa o estado da infraestrutura atual
C) Um tipo de módulo
D) Uma conta de cloud específica`
    }
  ];

  return (
    <div className="grid gap-4 p-4">
      <h1 className="text-3xl font-bold">Curso Terraform: Do Zero ao Especialista</h1>
      <div className="flex gap-2 overflow-x-auto">
        {modules.map((mod, index) => (
          <Button
            key={index}
            variant={module === index ? "default" : "outline"}
            onClick={() => setModule(index)}
          >
            {`Módulo ${index + 1}`}
          </Button>
        ))}
      </div>
      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">{modules[module].title}</h2>
          <div className="prose whitespace-pre-wrap">{modules[module].content}</div>
        </CardContent>
      </Card>
    </div>
  );
}
