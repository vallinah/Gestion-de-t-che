📦 Gestion de tâche — Backend Setup (Laravel 12 API)
🧠 Vue globale

Ce projet backend a été construit avec une stack Laravel 12 API + Sanctum + Spatie + Scramble + Pest pour une architecture SaaS propre et scalable.

⚙️ STACK UTILISÉE
Backend
PHP 8.3
Laravel 12.61.1
Laravel Breeze (API mode)
Laravel Sanctum
Spatie Laravel Permission
Scramble (API documentation)
Pest (testing framework)
Base de données
MySQL
🚀 INSTALLATION DU PROJET
1. Création du projet Laravel
composer create-project laravel/laravel:^12 backend
cd backend

✔️ Laravel 12 installé correctement

2. Configuration MySQL

Fichier modifié :

.env

Configuration :

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=gestion_tache
DB_USERNAME=root
DB_PASSWORD=

✔️ Base connectée

3. Nettoyage cache Laravel (erreur rencontrée)
Problème :
Table 'cache' doesn't exist
Cause :

CACHE_STORE configuré en database sans table

Solution :

Modifier .env :

CACHE_STORE=file

Puis :

php artisan cache:clear

✔️ Résolu

4. Installation Breeze API
composer require laravel/breeze --dev
php artisan breeze:install api
php artisan migrate

✔️ Auth API installée :

login
register
logout
reset password
5. Problème npm backend
Erreur :
package.json not found
Cause :

Breeze API ne contient pas de frontend backend

Solution :

❌ npm non utilisé côté backend

✔️ Résolution : ignoré volontairement

6. Installation Sanctum
composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
php artisan migrate
Problème rencontré :
table personal_access_tokens déjà existante
migration doublon
Solution :
suppression migration dupliquée
conservation d’une seule version

✔️ Sanctum fonctionnel

7. Installation Spatie Permission
composer require spatie/laravel-permission
php artisan vendor:publish --provider="Spatie\Permission\PermissionServiceProvider"
php artisan migrate
Modification fichier :
app/Models/User.php

Ajout :

use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasRoles;
}

✔️ Roles & permissions actifs

8. Installation Scramble (API docs)
composer require dedoc/scramble
php artisan vendor:publish --provider="Dedoc\Scramble\ScrambleServiceProvider"
php artisan serve

URL :

http://127.0.0.1:8000/docs/api

✔️ Documentation API active

9. Installation Pest
composer require pestphp/pest --dev
composer require pestphp/pest-plugin-laravel --dev
Problème :
php artisan pest:install → commande inexistante
Cause :

Pest v3 + Laravel 12 → installation automatique

✔️ Solution :
Utiliser directement :

php artisan test
10. Tests Laravel
php artisan test

Résultat :

10 tests passed ✔️

✔️ Auth + framework OK

⚠️ PROBLÈMES RENCONTRÉS & SOLUTIONS
1. Cache error
cause : cache database non configuré
fix : CACHE_STORE=file
2. npm error backend
cause : Breeze API sans frontend
fix : ignorer npm côté backend
3. Migration Sanctum doublon
cause : migration dupliquée
fix : suppression migration redondante
4. Pest install command missing
cause : version v3 Laravel 12
fix : utilisation directe php artisan test
🧱 FICHIERS MODIFIÉS
1. .env
DB configuration
CACHE_STORE=file ajouté
2. app/Models/User.php

Ajout :

use Spatie\Permission\Traits\HasRoles;

et :

use HasRoles;
🗑️ FICHIERS SUPPRIMÉS
migration duplicate :
create_personal_access_tokens_table (doublon)
🧪 ÉTAT FINAL DU BACKEND
✔️ Auth
Breeze API OK
Sanctum OK
✔️ Permissions
Spatie OK
✔️ API docs
Scramble OK
✔️ Tests
Pest OK (10/10 passed)
✔️ Database
MySQL stable
🚀 CONCLUSION

Backend 100% fonctionnel, stable et prêt pour :

Frontend React (Vite)
API consumption
Roles & permissions
Features tasks + meals