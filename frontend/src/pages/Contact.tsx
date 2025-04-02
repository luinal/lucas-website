import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const MotionPaper = motion(Paper);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica para enviar o formulário
    console.log('Form data:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 6 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Contato
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph>
        Entre em contato comigo para discutir oportunidades de colaboração
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <MotionPaper
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            sx={{ p: 4, height: '100%' }}
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
          </MotionPaper>
        </Grid>

        <Grid item xs={12} md={6}>
          <MotionPaper
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            sx={{ p: 4, height: '100%' }}
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
          </MotionPaper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact; 