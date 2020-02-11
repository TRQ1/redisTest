import app from './index';

const PORT = 8080;

const handleListening = () =>
    console.log(`Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);