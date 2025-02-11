require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const DRIVER_TOKENS = {}; // Armazena tokens temporariamente (melhor usar um banco)

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

/**
 * Rota para salvar o token do motorista
 */
app.post('/save-token', (req, res) => {
    const { driverId, accessToken, refreshToken } = req.body;
    DRIVER_TOKENS[driverId] = { accessToken, refreshToken };
    res.send({ message: "Token salvo com sucesso!" });
});

/**
 * Rota para recuperar o token do motorista para o passageiro
 */
app.get('/get-token/:driverId', async (req, res) => {
    const driverId = req.params.driverId;
    const tokenData = DRIVER_TOKENS[driverId];

    if (!tokenData) {
        return res.status(404).send({ message: "Token não encontrado" });
    }

    // Verifica se o token expirou e precisa ser atualizado
    if (isTokenExpired(tokenData.accessToken)) {
        try {
            const newTokenData = await refreshAccessToken(tokenData.refreshToken);
            DRIVER_TOKENS[driverId] = newTokenData;
            return res.send({ accessToken: newTokenData.accessToken });
        } catch (error) {
            return res.status(500).send({ message: "Erro ao atualizar o token" });
        }
    }

    res.send({ accessToken: tokenData.accessToken });
});

/**
 * Atualiza o token de acesso usando o refresh token
 */
async function refreshAccessToken(refreshToken) {
    const response = await axios.post('https://accounts.spotify.com/api/token', null, {
        params: {
            grant_type: 'refresh_token',
            refresh_token: refreshToken,
            client_id: SPOTIFY_CLIENT_ID,
            client_secret: SPOTIFY_CLIENT_SECRET
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    return {
        accessToken: response.data.access_token,
        refreshToken: response.data.refresh_token || refreshToken
    };
}

/**
 * Função que verifica se um token está expirado
 */
function isTokenExpired(accessToken) {
    // lógica melhor para verificar se o token expirou
    return false;
}

// Inicia o servidor
app.listen(3000, () => console.log('🚀 Servidor rodando na porta 3000'));
