## Начало

Запустите проект

```bash
npm install
# or
yarn
```

Запустите проект

```bash
npm run dev
# or
yarn dev
```
Перед установкой ngrok необходимо зарегистрироваться на платформе: https://dashboard.ngrok.com

После успешного создания учетной записи у вас откроется страница: https://dashboard.ngrok.com/get-started/setup/macos или https://dashboard.ngrok.com/get-started/setup/windows

На данной странице вы увидите:
- Команду для установки ngrok на вашей ОС
- Команду для регистрации API-Key в системе

Необходимо обязательно зарегестрировать выбранный API-Key в терминале вашей ОС

Команды для установки ngrok для разных ОС

MacOS
```
 brew install ngrok/ngrok/ngrok
```

Windows
```
choco install ngrok
```

Linux
```
snap install ngrok
```

После запуска проекта нужно запустить команду:
```
ngrok http 3000
```
Данная команда запустит инициализацию ngrok адреса для корректной работы TON-Connect

В терминале будет сгенерирована ссылка. Необходимо открыть ссылку в браузере и нажать синюю кнопку для отрытия страницы.

Для удобства рекомендуем установить расширение Tonkeeper для Google, создать новый или импортировать уже существующий кошелёк и скопировать его адрес. Теперь вы можете, нажав на кнопку "Подключить кошелёк" в хэдере приложения, в открывшемся окне вставить скопируемый адрес кошелька и подключить его. В случае успешного подключения кошелька в правой части хэдера появится баланс, а на странице транзакций будет доступен адрес кошелька.  