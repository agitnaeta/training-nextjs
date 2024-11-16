## How To setup Apache

`sudo a2endmod proxy`

`sudo a2endmod proxy_http`

## Apache Config

`ServerName vpsmaster.my.id
ProxyPreserveHost On
ProxyPass / http://localhost:3000
ProxypassReverse / http://localhost:3000`

---

Config Server Tutorial:
https://medium.com/@ranjandsingh/how-to-deploy-nextjs-app-on-a-custom-vps-56269748870f
