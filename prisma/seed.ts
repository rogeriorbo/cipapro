import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const ppes = [
    { name: 'Óculos de Segurança Incolor', caNumber: '34084', manufacturer: 'Danny / Kalipso', category: 'OCULAR_FACIAL', description: 'Lente Incolor Ampla Visão' },
    { name: 'Protetor Auditivo Plug', caNumber: '5674', manufacturer: '3M do Brasil', category: 'AUDITIVA', description: 'Tipo Plug 16dB' },
    { name: 'Protetor Auditivo Concha', caNumber: '28018', manufacturer: '3M Peltor', category: 'AUDITIVA', description: 'Tipo Concha H9A' },
    { name: 'Botina de Couro', caNumber: '28511', manufacturer: 'Marluvas', category: 'MEMBROS_INFERIORES', description: 'Bico de Aço/Composite' },
    { name: 'Luva Nitrílica', caNumber: '25244', manufacturer: 'Volk do Brasil', category: 'MEMBROS_SUPERIORES', description: 'Proteção contra químicos e solventes' },
    { name: 'Luva Vaqueta', caNumber: '11210', manufacturer: 'Zanel', category: 'MEMBROS_SUPERIORES', description: 'Proteção Mecânica' },
    { name: 'Respirador Semifacial', caNumber: '4115', manufacturer: '3M Série 6000', category: 'RESPIRATORIA', description: 'Vapores Orgânicos' },
    { name: 'Capacete de Segurança', caNumber: '8304', manufacturer: 'MSA V-Gard', category: 'TRABALHO_ALTURA', description: 'Aba Frontal' },
  ];

  for (const ppe of ppes) {
    await prisma.pPE.create({
      data: ppe as any,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
