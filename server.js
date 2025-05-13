const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Endpoint pour l'approbation du paiement
app.post('/api/approve-payment', (req, res) => {
    const { paymentId } = req.body;
    
    // Ici, vous devriez vérifier les détails de la réservation
    // et décider d'approuver ou non le paiement
    
    // Pour cet exemple, nous approuvons toujours
    res.json({ success: true, paymentId: paymentId });
});

// Endpoint pour la complétion du paiement
app.post('/api/complete-payment', (req, res) => {
    const { paymentId, txid } = req.body;
    
    // Ici, vous devriez enregistrer la transaction dans votre base de données
    // et confirmer la réservation
    
    console.log(`Paiement complété - PaymentID: ${paymentId}, TXID: ${txid}`);
    res.json({ success: true, message: 'Réservation confirmée' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});