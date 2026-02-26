
# ========================== git ==============================
git clone http://git.up.ac.pa/portalempleo/portalempleo.git
https://github.com/UzzielSW/portalempleo.git

git fetch origin # actualizar cambios
git fetch github # actualizar cambios

# ver ramas locales y remotas
git branch -a

# cambiar de rama
git switch brayan.puyol

# crear ramas en local
git checkout -b Dev origin/Dev
git checkout -b Test origin/Test
git checkout -b brayan.puyol origin/brayan.puyol

# sincronizar con otro repositorio
git remote -v
git remote add github https://github.com/UzzielSW/portalempleo.git
git remote add github https://github.com/UzzielSW/expressbra.git

# antes de hacer push ya debe existir un repositorio vacio con el mismo nombre que se coloco con el comando anterior
git push github --all
git push github --tags

git pull github brayan.puyol
# ========================== npm ==============================
# correccion de vulnerabilidades y actualizaciones
npm audit fix --force


# ========================== PM2 ==============================
pm2 start ecosystem.config.js --only PortalEmpleoUP --env development
pm2 restart ecosystem.config.js --only PortalEmpleoUP --env development
pm2 stop ecosystem.config.js --only PortalEmpleoUP --env development
pm2 delete ecosystem.config.js --only PortalEmpleoUP --env development
pm2 monitor
pm2 list


# ========================== VITE ==============================
npm create vite@latest frontend -- --template react

npm install -D tailwindcss postcss autoprefixer
npm install preline
npx tailwindcss init -p
npm install @tailwindcss/postcss


# ========================== RUN ==============================
#backend
npm run start:api

#frontend
npm run dev
