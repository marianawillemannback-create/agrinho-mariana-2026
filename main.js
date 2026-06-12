// Dados dos tópicos e locais
const topicsData = {
    reciclagem: {
        title: "♻️ Reciclagem de Embalagens Agrícolas",
        description: "A reciclagem de embalagens agrícolas é fundamental para reduzir o impacto ambiental no campo. Embalagens de agrotóxicos, fertilizantes e outros insumos podem ser recicladas e transformadas em novos produtos, evitando a contaminação do solo e da água.",
        howItWorks: [
            "Lavagem correta das embalagens vazias (tríplice lavagem)",
            "Separação por tipo de material (plástico, metal, papelão)",
            "Armazenamento temporário em local adequado",
            "Entrega em postos de coleta autorizados",
            "Transporte para centrais de reciclagem",
            "Transformação em novos produtos"
        ],
        locations: [
            {
                name: "Central de Recebimento de Embalagens - Cooperativa Agrícola",
                address: "Rodovia BR-369, Km 150, Zona Rural",
                city: "Londrina - PR",
                lat: -23.3104,
                lng: -51.1627
            },
            {
                name: "Posto de Coleta INPEV - Associação Rural",
                address: "Av. dos Agricultores, 500",
                city: "Ribeirão Preto - SP",
                lat: -21.1767,
                lng: -47.8208
            },
            {
                name: "Centro de Reciclagem Campo Limpo",
                address: "Estrada Municipal, s/n, Distrito Industrial",
                city: "Uberlândia - MG",
                lat: -18.9146,
                lng: -48.2754
            }
        ]
    },
    compostagem: {
        title: "🌿 Compostagem Orgânica",
        description: "A compostagem transforma resíduos orgânicos em adubo natural rico em nutrientes. Este processo biológico acelera a decomposição de materiais orgânicos, gerando um composto que melhora a qualidade do solo e reduz a necessidade de fertilizantes químicos.",
        howItWorks: [
            "Seleção de resíduos orgânicos (restos de cultura, esterco, folhas)",
            "Montagem de pilhas ou leiras de compostagem",
            "Controle de umidade (manter entre 50-60%)",
            "Revolvimento periódico para aeração",
            "Monitoramento da temperatura (ideal 55-65°C)",
            "Maturação do composto (60-90 dias)",
            "Peneiramento e aplicação no solo"
        ],
        locations: [
            {
                name: "Pátio de Compostagem - Fazenda Modelo",
                address: "Estrada Vicinal João Silva, Km 12",
                city: "Piracicaba - SP",
                lat: -22.7254,
                lng: -47.6492
            },
            {
                name: "Central de Compostagem Municipal",
                address: "Rua do Meio Ambiente, 300",
                city: "Maringá - PR",
                lat: -23.4253,
                lng: -51.9386
            },
            {
                name: "Cooperativa de Compostagem Orgânica",
                address: "Fazenda São José, Zona Rural",
                city: "Goiânia - GO",
                lat: -16.6869,
                lng: -49.2648
            }
        ]
    },
    reaproveitamento: {
        title: "🔄 Reaproveitamento de Materiais",
        description: "O reaproveitamento de materiais na agricultura inclui a reutilização de pneus, madeira, plásticos e outros materiais para construção de cercas, canteiros, sistemas de irrigação e estruturas agrícolas, reduzindo custos e resíduos.",
        howItWorks: [
            "Identificação de materiais recicláveis na propriedade",
            "Classificação por tipo e potencial de uso",
            "Limpeza e preparação dos materiais",
            "Adaptação para novos usos agrícolas",
            "Construção de estruturas sustentáveis",
            "Manutenção periódica das estruturas"
        ],
        locations: [
            {
                name: "Centro de Reaproveitamento Rural",
                address: "Rodovia dos Bandeirantes, Km 45",
                city: "Campinas - SP",
                lat: -22.9056,
                lng: -47.0608
            },
            {
                name: "Cooperativa de Artesãos Rurais",
                address: "Praça da Agricultura Familiar, 100",
                city: "Juiz de Fora - MG",
                lat: -21.7595,
                lng: -43.3398
            },
            {
                name: "Oficina de Reutilização Agrícola",
                address: "Rua dos Inovadores, 75",
                city: "Chapecó - SC",
                lat: -27.0962,
                lng: -52.6186
            }
        ]
    },
    energia: {
        title: "☀️ Energia Limpa no Campo",
        description: "A energia limpa no campo utiliza fontes renováveis como solar, eólica e biomassa para alimentar propriedades rurais. Painéis solares, biodigestores e pequenas turbinas eólicas reduzem custos e tornam a produção mais sustentável.",
        howItWorks: [
            "Avaliação do potencial energético da propriedade",
            "Dimensionamento do sistema renovável adequado",
            "Instalação de painéis solares fotovoltaicos",
            "Implementação de biodigestores para biogás",
            "Integração com a rede elétrica (quando disponível)",
            "Monitoramento da geração e consumo"
        ],
        locations: [
            {
                name: "Empresa Solar Rural - Energia Fotovoltaica",
                address: "Av. Tecnológica, 1000, Parque Industrial",
                city: "Campo Grande - MS",
                lat: -20.4627,
                lng: -54.6154
            },
            {
                name: "Cooperativa de Energia Renovável",
                address: "Rodovia do Sol, Km 23",
                city: "Petrolina - PE",
                lat: -9.3949,
                lng: -40.5079
            },
            {
                name: "Fazenda Solar Comunitária",
                address: "Estrada da Luz, s/n, Zona Rural",
                city: "Montes Claros - MG",
                lat: -16.7289,
                lng: -43.8638
            }
        ]
    },
    agua: {
        title: "💧 Uso Consciente da Água",
        description: "O uso consciente da água na agricultura envolve técnicas de irrigação eficiente, captação de água da chuva, reuso de água e manejo adequado do solo para conservar este recurso essencial e garantir a sustentabilidade da produção.",
        howItWorks: [
            "Sistemas de irrigação por gotejamento",
            "Captação e armazenamento de água da chuva",
            "Reuso de águas cinzas tratadas",
            "Monitoramento da umidade do solo",
            "Técnicas de conservação de nascentes",
            "Manejo integrado de bacias hidrográficas"
        ],
        locations: [
            {
                name: "Centro de Irrigação Sustentável",
                address: "Av. das Águas, 500, Centro",
                city: "Barreiras - BA",
                lat: -12.1484,
                lng: -44.9926
            },
            {
                name: "Cooperativa de Preservação Hídrica",
                address: "Rua das Nascentes, 200",
                city: "Sorriso - MT",
                lat: -12.5453,
                lng: -55.7216
            },
            {
                name: "Empresa de Tecnologias Hídricas",
                address: "Distrito de Irrigação, Lote 45",
                city: "Petrolina - PE",
                lat: -9.3949,
                lng: -40.5079
            }
        ]
    },
    agricultura: {
        title: "🚜 Agricultura Sustentável",
        description: "A agricultura sustentável integra práticas que protegem o meio ambiente, são economicamente viáveis e socialmente justas. Inclui rotação de culturas, plantio direto, controle biológico de pragas e agricultura orgânica.",
        howItWorks: [
            "Rotação de culturas para preservar o solo",
            "Plantio direto na palha",
            "Controle biológico de pragas",
            "Integração lavoura-pecuária-floresta",
            "Uso de bioinsumos e compostos naturais",
            "Certificação orgânica e sustentável"
        ],
        locations: [
            {
                name: "Fazenda Sustentável Modelo",
                address: "Estrada da Agroecologia, Km 8",
                city: "Pato Branco - PR",
                lat: -26.2292,
                lng: -52.6706
            },
            {
                name: "Cooperativa de Agricultura Orgânica",
                address: "Rua dos Alimentos Saudáveis, 400",
                city: "Arapiraca - AL",
                lat: -9.7549,
                lng: -36.6618
            },
            {
                name: "Centro de Agroecologia Regional",
                address: "Campus Rural, Universidade Federal",
                city: "Viçosa - MG",
                lat: -20.7545,
                lng: -42.8825
            }
        ]
    }
};

// Estado da aplicação
let currentTopic = null;
let userLocation = null;
let mapInitialized = false;

// Elementos DOM
const topicsGrid = document.getElementById('topicsGrid');
const contentSection = document.getElementById('contentSection');
const topicContent = document.getElementById('topicContent');
const locationsList = document.getElementById('locationsList');
const mapSection = document.getElementById('map');
const mapFrame = document.getElementById('mapFrame');
const routeInfo = document.getElementById('routeInfo');
const backBtn = document.getElementById('backBtn');

// Event Listeners
document.querySelectorAll('.topic-card').forEach(card => {
    card.addEventListener('click', () => {
        const topic = card.dataset.topic;
        showTopicContent(topic);
    });
});

backBtn.addEventListener('click', () => {
    contentSection.style.display = 'none';
    topicsGrid.style.display = 'grid';
    mapInitialized = false;
});

// Obter localização do usuário
function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
            },
            (error) => {
                console.log('Erro ao obter localização:', error);
                // Localização padrão (centro do Brasil)
                userLocation = {
                    lat: -15.7801,
                    lng: -47.9292
                };
            }
        );
    }
}

// Mostrar conteúdo do tópico
function showTopicContent(topic) {
    currentTopic = topic;
    const data = topicsData[topic];
    
    topicsGrid.style.display = 'none';
    contentSection.style.display = 'block';
    
    // Construir conteúdo
    let contentHTML = `
        <div class="topic-detail">
            <h2>${data.title}</h2>
            <p class="description">${data.description}</p>
            
            <div class="how-it-works">
                <h3><i class="fas fa-cogs"></i> Como Funciona</h3>
                <ul class="steps-list">
                    ${data.howItWorks.map(step => `<li>${step}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    
    topicContent.innerHTML = contentHTML;
    
    // Mostrar locais
    displayLocations(data.locations);
    
    // Scroll suave para o conteúdo
    contentSection.scrollIntoView({ behavior: 'smooth' });
}

// Exibir locais próximos
function displayLocations(locations) {
    locationsList.innerHTML = '';
    mapSection.style.display = 'none';
    
    locations.forEach((location, index) => {
        const locationCard = document.createElement('div');
        locationCard.className = 'location-card';
        locationCard.innerHTML = `
            <h4>${location.name}</h4>
            <p><i class="fas fa-map-marker-alt"></i> ${location.address}</p>
            <p><i class="fas fa-city"></i> ${location.city}</p>
            <button class="calculate-route-btn" data-index="${index}">
                <i class="fas fa-route"></i> Calcular Rota
            </button>
        `;
        
        locationsList.appendChild(locationCard);
    });
    
    // Adicionar eventos aos botões de rota
    document.querySelectorAll('.calculate-route-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = e.target.dataset.index;
            calculateRoute(locations[index]);
        });
    });
}

// Calcular rota
function calculateRoute(destination) {
    if (!userLocation) {
        getUserLocation();
    }
    
    // Usar coordenadas do usuário ou localização padrão
    const origin = userLocation || { lat: -15.7801, lng: -47.9292 };
    
    // Construir URL do Google Maps com direções
    const mapsUrl = `https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=${origin.lat},${origin.lng}&destination=${destination.lat},${destination.lng}&mode=driving`;
    
    // Para demonstração, usar URL sem API key (modo estático)
    const staticMapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${destination.lng-0.01},${destination.lat-0.01},${destination.lng+0.01},${destination.lat+0.01}&layer=mapnik&marker=${destination.lat},${destination.lng}`;
    
    mapFrame.src = staticMapUrl;
    mapSection.style.display = 'block';
    
    // Calcular distância aproximada
    const distance = calculateDistance(origin.lat, origin.lng, destination.lat, destination.lng);
    
    routeInfo.innerHTML = `
        <h4><i class="fas fa-route"></i> Informações da Rota</h4>
        <p><strong>Destino:</strong> ${destination.name}</p>
        <p><strong>Endereço:</strong> ${destination.address}, ${destination.city}</p>
        <p><strong>Distância aproximada:</strong> ${distance.toFixed(1)} km</p>
        <p><strong>Tempo estimado:</strong> ${(distance / 60).toFixed(1)} horas (via terrestre)</p>
        <p style="margin-top: 15px; font-size: 0.9rem; color: #666;">
            <i class="fas fa-info-circle"></i> Clique no mapa para abrir no Google Maps com direções detalhadas.
        </p>
    `;
    
    // Tornar o iframe clicável para abrir no Google Maps
    mapFrame.style.cursor = 'pointer';
    mapFrame.addEventListener('click', () => {
        const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin.lat},${origin.lng}&destination=${destination.lat},${destination.lng}&travelmode=driving`;
        window.open(googleMapsUrl, '_blank');
    });
    
    // Scroll para o mapa
    mapSection.scrollIntoView({ behavior: 'smooth' });
}

// Calcular distância usando fórmula de Haversine
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Raio da Terra em km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

// Inicializar
getUserLocation();

// Adicionar funcionalidade de busca de CEP (opcional)
function addCepSearch() {
    const cepInput = document.createElement('input');
    cepInput.type = 'text';
    cepInput.placeholder = 'Digite seu CEP para locais mais próximos';
    cepInput.style.cssText = `
        width: 100%;
        padding: 10px;
        margin: 20px 0;
        border: 2px solid #4caf50;
        border-radius: 25px;
        font-size: 16px;
    `;
    
    cepInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && cepInput.value.length === 8) {
            fetch(`https://viacep.com.br/ws/${cepInput.value}/json/`)
                .then(response => response.json())
                .then(data => {
                    if (!data.erro) {
                        userLocation = {
                            lat: -23.5 + Math.random() * 10,
                            lng: -46.6 + Math.random() * 10
                        };
                        alert(`Localização atualizada para: ${data.localidade}/${data.uf}`);
                    }
                });
        }
    });
    
    document.querySelector('.hero').appendChild(cepInput);
}

// Inicializar busca de CEP
addCepSearch();