const stocks = [
    { symbol: 'PETR4', name: 'Petrobras PN', price: 38.45, change: 0.87, changePercent: 2.31 },
    { symbol: 'VALE3', name: 'Vale ON', price: 62.18, change: -1.23, changePercent: -1.94 },
    { symbol: 'ITUB4', name: 'Itaú Unibanco PN', price: 26.54, change: 0.34, changePercent: 1.30 },
    { symbol: 'BBDC4', name: 'Bradesco PN', price: 13.87, change: -0.15, changePercent: -1.07 },
    { symbol: 'BBAS3', name: 'Banco do Brasil ON', price: 27.92, change: 0.52, changePercent: 1.90 },
    { symbol: 'ABEV3', name: 'Ambev ON', price: 11.23, change: 0.08, changePercent: 0.72 },
    { symbol: 'WEGE3', name: 'WEG ON', price: 42.67, change: 1.15, changePercent: 2.77 },
    { symbol: 'RENT3', name: 'Localiza ON', price: 48.91, change: -0.67, changePercent: -1.35 },
    { symbol: 'SUZB3', name: 'Suzano ON', price: 56.34, change: 0.98, changePercent: 1.77 },
    { symbol: 'MGLU3', name: 'Magazine Luiza ON', price: 8.76, change: -0.43, changePercent: -4.68 },
    { symbol: 'B3SA3', name: 'B3 ON', price: 12.45, change: 0.21, changePercent: 1.72 },
    { symbol: 'RDOR3', name: 'Rede D\'Or ON', price: 33.28, change: -0.19, changePercent: -0.57 }
];

function loadStocks() {
    const content = document.getElementById('content');
    content.innerHTML = '<div class="loading"><div class="spinner"></div>Carregando cotações...</div>';

    setTimeout(() => {
        const stockData = stocks.map(stock => {
            const variation = (Math.random() - 0.5) * 0.5;
            const newPrice = stock.price + variation;
            const newChange = stock.change + variation;
            const newChangePercent = (newChange / (newPrice - newChange)) * 100;
            
            return {
                ...stock,
                price: newPrice,
                change: newChange,
                changePercent: newChangePercent
            };
        });
        
        displayStocks(stockData);
        updateLastUpdate();
    }, 500);
}

function displayStocks(stockData) {
    const content = document.getElementById('content');
    
    const grid = document.createElement('div');
    grid.className = 'stocks-grid';

    stockData.forEach(stock => {
        const card = createStockCard(stock);
        grid.appendChild(card);
    });

    content.innerHTML = '';
    content.appendChild(grid);
}

function createStockCard(stock) {
    const card = document.createElement('div');
    card.className = 'stock-card';

    const isPositive = stock.change >= 0;

    card.innerHTML = `
        <div class="stock-symbol">${stock.name}</div>
        <div class="stock-name">${stock.symbol}</div>
        <div class="stock-price">R$ ${stock.price.toFixed(2)}</div>
        <div class="stock-change ${isPositive ? 'positive' : 'negative'}">
            ${isPositive ? '▲' : '▼'} ${Math.abs(stock.change).toFixed(2)} (${stock.changePercent.toFixed(2)}%)
        </div>
    `;

    return card;
}

function updateLastUpdate() {
    const now = new Date();
    const formatted = now.toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('lastUpdate').textContent = `Última atualização: ${formatted} (valores simulados)`;
}

loadStocks();

setInterval(loadStocks, 10000);
