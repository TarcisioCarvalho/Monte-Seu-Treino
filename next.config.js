// next.config.js
module.exports = {
    future: {
      webpack5: true, // Certifique-se de que o Webpack 5 esteja ativado
      strictPostcssConfiguration: true, // Opcional, mas recomendado para evitar problemas de configuração
    },
    experimental: {
      serverComponents: false, // Desativa os Server Components
    },
  };