"use client"

import { useState } from "react"
import Link from "next/link"
import { Edit, Plus, Trash2, UserCog } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { toast } from "@/components/ui/use-toast"

export default function UsersPage() {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.role) {
      toast({
        title: "Erro",
        description: "Preencha todos os campos antes de salvar.",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Sucesso",
      description: "Usuário adicionado com sucesso!",
    })

    setFormData({ name: "", email: "", role: "" })
    setOpen(false)
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Gestão de Usuários</h1>
          <p className="text-muted-foreground">Gerencie os usuários do sistema e suas permissões</p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Novo Usuário
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Adicionar Novo Usuário</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <Input
                placeholder="Nome completo"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <Select
                value={formData.role}
                onValueChange={(value) => setFormData({ ...formData, role: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Perfil" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Administrador">Administrador</SelectItem>
                  <SelectItem value="Perito">Perito</SelectItem>
                  <SelectItem value="Gerente">Gerente</SelectItem>
                  <SelectItem value="Assistente">Assistente</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex justify-end">
                <Button type="submit">Salvar</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Filtros</CardTitle>
          <CardDescription>Filtre a lista de usuários por nome ou perfil</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input placeholder="Buscar por nome ou email" />
            </div>
            <div className="w-full md:w-[200px]">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Perfil" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Administrador</SelectItem>
                  <SelectItem value="manager">Gerente</SelectItem>
                  <SelectItem value="expert">Perito</SelectItem>
                  <SelectItem value="assistant">Assistente</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button>Filtrar</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Perfil</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        user.status === "Ativo"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {user.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={`/users/${user.id}/edit`}>
                          <Edit className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={`/users/${user.id}/permissions`}>
                          <UserCog className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

const users = [
  {
    id: "1",
    name: "Carlos Silva",
    email: "carlos.silva@exemplo.com",
    role: "Administrador",
    status: "Ativo",
  },
  {
    id: "2",
    name: "Ana Pereira",
    email: "ana.pereira@exemplo.com",
    role: "Perito",
    status: "Ativo",
  },
  {
    id: "3",
    name: "Roberto Santos",
    email: "roberto.santos@exemplo.com",
    role: "Gerente",
    status: "Ativo",
  },
  {
    id: "4",
    name: "Juliana Costa",
    email: "juliana.costa@exemplo.com",
    role: "Assistente",
    status: "Inativo",
  },
  {
    id: "5",
    name: "Marcos Oliveira",
    email: "marcos.oliveira@exemplo.com",
    role: "Perito",
    status: "Ativo",
  },
]
