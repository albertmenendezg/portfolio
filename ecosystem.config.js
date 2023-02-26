module.exports = {
  apps : [{
    script: 'nom start',
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : '52.213.173.64',
      ref  : 'origin/master',
      repo : 'https://github.com/albertmenendezg/portfolio.git',
      path : '/home/ubuntu/apps',
      'pre-deploy-local': '',
      'post-deploy' : 'soruce ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh-options': 'ForwardAgent=yes'
    }
  }
};
