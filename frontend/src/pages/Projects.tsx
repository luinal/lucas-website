import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button, Chip, Box } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const MotionCard = motion(Card);

const projects = [
  {
    title: 'Análise de Dados de Vendas',
    description: 'Sistema de análise de dados de vendas com visualizações interativas e previsões de vendas usando machine learning.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'React', 'D3.js'],
    github: 'https://github.com/seu-usuario/projeto1',
    demo: 'https://demo-projeto1.com',
  },
  {
    title: 'Plataforma de E-commerce',
    description: 'Plataforma completa de e-commerce com sistema de pagamentos, gestão de estoque e análise de comportamento do usuário.',
    technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Express'],
    github: 'https://github.com/seu-usuario/projeto2',
    demo: 'https://demo-projeto2.com',
  },
  {
    title: 'Sistema de Recomendação',
    description: 'Sistema de recomendação de produtos baseado em machine learning e análise de comportamento do usuário.',
    technologies: ['Python', 'TensorFlow', 'Flask', 'React', 'PostgreSQL'],
    github: 'https://github.com/seu-usuario/projeto3',
    demo: 'https://demo-projeto3.com',
  },
];

const Projects: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 6 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Projetos
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph>
        Uma seleção dos meus projetos mais recentes e relevantes
      </Typography>

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <MotionCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {project.title}
                </Typography>
                <Typography color="text.secondary" paragraph>
                  {project.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {project.technologies.map((tech) => (
                    <Chip key={tech} label={tech} size="small" />
                  ))}
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  startIcon={<GitHubIcon />}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Button>
                <Button
                  size="small"
                  startIcon={<LaunchIcon />}
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </Button>
              </CardActions>
            </MotionCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects; 