import React, { useState } from 'react';
import { Container, Typography, Box, Grid, Paper, Button, Tabs, Tab, Card, CardContent, CardMedia, CardActions, IconButton, TextField, Snackbar, Alert, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import DataObjectIcon from '@mui/icons-material/DataObject';
import ScienceIcon from '@mui/icons-material/Science';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const MotionPaper = motion(Paper);

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`project-tabpanel-${index}`}
      aria-labelledby={`project-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const projects = {
  web: [
    {
      title: 'Plataforma de E-commerce',
      description: 'Plataforma completa de e-commerce com sistema de pagamentos, gestão de estoque e análise de comportamento do usuário.',
      image: 'https://source.unsplash.com/random/800x600?ecommerce',
      technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Express'],
      github: 'https://github.com/seu-usuario/projeto1',
      demo: 'https://demo-projeto1.com',
    },
    {
      title: 'Sistema de Gestão',
      description: 'Sistema de gestão empresarial com dashboard interativo e relatórios personalizados.',
      image: 'https://source.unsplash.com/random/800x600?dashboard',
      technologies: ['React', 'Python', 'Django', 'PostgreSQL'],
      github: 'https://github.com/seu-usuario/projeto2',
      demo: 'https://demo-projeto2.com',
    },
  ],
  data: [
    {
      title: 'Análise de Dados de Vendas',
      description: 'Sistema de análise de dados de vendas com visualizações interativas e previsões de vendas usando machine learning.',
      image: 'https://source.unsplash.com/random/800x600?data',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'React', 'D3.js'],
      github: 'https://github.com/seu-usuario/projeto3',
      demo: 'https://demo-projeto3.com',
    },
    {
      title: 'Dashboard de Analytics',
      description: 'Dashboard interativo para análise de métricas e KPIs em tempo real.',
      image: 'https://source.unsplash.com/random/800x600?analytics',
      technologies: ['Python', 'Streamlit', 'Plotly', 'SQL'],
      github: 'https://github.com/seu-usuario/projeto4',
      demo: 'https://demo-projeto4.com',
    },
  ],
  ml: [
    {
      title: 'Sistema de Recomendação',
      description: 'Sistema de recomendação de produtos baseado em machine learning e análise de comportamento do usuário.',
      image: 'https://source.unsplash.com/random/800x600?ai',
      technologies: ['Python', 'TensorFlow', 'Flask', 'React', 'PostgreSQL'],
      github: 'https://github.com/seu-usuario/projeto5',
      demo: 'https://demo-projeto5.com',
    },
    {
      title: 'Detecção de Anomalias',
      description: 'Sistema de detecção de anomalias em dados de transações financeiras usando deep learning.',
      image: 'https://source.unsplash.com/random/800x600?security',
      technologies: ['Python', 'PyTorch', 'FastAPI', 'React'],
      github: 'https://github.com/seu-usuario/projeto6',
      demo: 'https://demo-projeto6.com',
    },
  ],
};

const Home: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica para enviar o formulário
    console.log('Form data:', formData);
    setSnackbar({
      open: true,
      message: 'Mensagem enviada com sucesso!',
      severity: 'success',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at center, rgba(0,188,212,0.1) 0%, rgba(10,25,41,0) 70%)',
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h1" component="h1" gutterBottom>
                  Lucas Inácio
                </Typography>
                <Typography variant="h2" color="primary" gutterBottom>
                  Desenvolvedor e Cientista de Dados
                </Typography>
                <Typography variant="h5" color="text.secondary" paragraph>
                  Transformando dados em insights e criando soluções inovadoras
                </Typography>
                <Box sx={{ mt: 4 }}>
                  <Button
                    href="#projects"
                    variant="contained"
                    size="large"
                    sx={{ mr: 2 }}
                  >
                    Ver Projetos
                  </Button>
                  <Button
                    href="#contact"
                    variant="outlined"
                    size="large"
                  >
                    Contato
                  </Button>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                style={{ position: 'relative' }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: -20,
                      left: -20,
                      right: 20,
                      bottom: 20,
                      border: '2px solid',
                      borderColor: 'primary.main',
                      borderRadius: 2,
                      zIndex: -1,
                    },
                  }}
                >
                  <Paper
                    elevation={24}
                    sx={{
                      p: 4,
                      background: 'rgba(19, 47, 76, 0.8)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <Typography variant="h4" gutterBottom>
                      Habilidades Principais
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <CodeIcon sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
                          <Typography variant="h6">Desenvolvimento Full-Stack</Typography>
                        </Box>
                        <Typography color="text.secondary">
                          Especialista em desenvolvimento de software com foco em aplicações web
                          modernas e escaláveis, utilizando as mais recentes tecnologias.
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <DataObjectIcon sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
                          <Typography variant="h6">Análise de Dados</Typography>
                        </Box>
                        <Typography color="text.secondary">
                          Análise e processamento de dados para extrair insights valiosos e
                          tomar decisões baseadas em dados.
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <ScienceIcon sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
                          <Typography variant="h6">Machine Learning</Typography>
                        </Box>
                        <Typography color="text.secondary">
                          Desenvolvimento de modelos de machine learning para resolver problemas
                          complexos e automatizar processos.
                        </Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box id="projects" sx={{ py: 8, background: 'rgba(19, 47, 76, 0.3)' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography variant="h2" component="h2" gutterBottom align="center">
              Projetos
            </Typography>
            <Typography variant="h5" color="text.secondary" paragraph align="center" sx={{ mb: 4 }}>
              Uma seleção dos meus projetos mais recentes e relevantes
            </Typography>

            <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons="auto"
                centered
                sx={{
                  '& .MuiTab-root': {
                    textTransform: 'none',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                  },
                }}
              >
                <Tab label="Desenvolvimento Web" />
                <Tab label="Análise de Dados" />
                <Tab label="Machine Learning" />
              </Tabs>
            </Box>

            <TabPanel value={tabValue} index={0}>
              <Grid container spacing={4}>
                {projects.web.map((project, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={project.image}
                        alt={project.title}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
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
                        <IconButton
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GitHubIcon />
                        </IconButton>
                        <IconButton
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <LaunchIcon />
                        </IconButton>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </TabPanel>

            <TabPanel value={tabValue} index={1}>
              <Grid container spacing={4}>
                {projects.data.map((project, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={project.image}
                        alt={project.title}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
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
                        <IconButton
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GitHubIcon />
                        </IconButton>
                        <IconButton
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <LaunchIcon />
                        </IconButton>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </TabPanel>

            <TabPanel value={tabValue} index={2}>
              <Grid container spacing={4}>
                {projects.ml.map((project, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={project.image}
                        alt={project.title}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
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
                        <IconButton
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GitHubIcon />
                        </IconButton>
                        <IconButton
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <LaunchIcon />
                        </IconButton>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
          </motion.div>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography variant="h2" component="h2" gutterBottom align="center">
              Contato
            </Typography>
            <Typography variant="h5" color="text.secondary" paragraph align="center" sx={{ mb: 4 }}>
              Entre em contato comigo para discutir oportunidades de colaboração
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={24}
                  sx={{
                    p: 4,
                    background: 'rgba(19, 47, 76, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <Typography variant="h4" gutterBottom>
                    Vamos Conversar
                  </Typography>
                  <Typography paragraph>
                    Estou sempre aberto a novas oportunidades e colaborações interessantes.
                    Sinta-se à vontade para entrar em contato!
                  </Typography>

                  <Box sx={{ mt: 4 }}>
                    <Button
                      variant="outlined"
                      startIcon={<EmailIcon />}
                      href="mailto:seu-email@exemplo.com"
                      sx={{ mr: 2, mb: 2 }}
                    >
                      Email
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<LinkedInIcon />}
                      href="https://linkedin.com/in/seu-perfil"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ mr: 2, mb: 2 }}
                    >
                      LinkedIn
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<GitHubIcon />}
                      href="https://github.com/seu-usuario"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ mb: 2 }}
                    >
                      GitHub
                    </Button>
                  </Box>
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper
                  elevation={24}
                  sx={{
                    p: 4,
                    background: 'rgba(19, 47, 76, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <form onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      label="Nome"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      margin="normal"
                      required
                    />
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      margin="normal"
                      required
                    />
                    <TextField
                      fullWidth
                      label="Mensagem"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      margin="normal"
                      required
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      sx={{ mt: 3 }}
                    >
                      Enviar Mensagem
                    </Button>
                  </form>
                </Paper>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Home; 