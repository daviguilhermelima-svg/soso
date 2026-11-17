
document.addEventListener("DOMContentLoaded", () => {

  // =====================================
  // TRADUÇÕES
  // =====================================

  const translations = {
    pt: {
      tagline: "Seu transporte, seu caminho.",
      mainTitle: "Seu transporte, seu caminho.",
      mainDescription: "Consulte opções de transporte e encontre seu caminho.",
      tabPlan: "🧭 Planejar viagem",
      tabLines: "🚌 Linhas urbanas",
      tabSchedules: "🕒 Horários",
      tabAccessibility: "♿ Acessibilidade",
      tabIntercity: "🚍 Intermunicipal",
      originLabel: "De onde você vai sair?",
      destinationLabel: "Para onde você quer ir?",
      originPlaceholder: "Ex.: Praça Central",
      destinationPlaceholder: "Ex.: Universidade",
      myLocation: "📍 Minha localização",
      swap: "Trocar",
      searchRoute: "Pesquisar caminho",
      routeInitial: "Escolha a origem e o destino para pesquisar.",
      routeNote: "A rota desta ferramenta é de caminhada. Ela não representa o trajeto de um ônibus.",
      linesDescription: "Consulte as linhas de transporte público da cidade selecionada.",
      linesUnavailable: "Ainda não há uma base de linhas urbanas confirmada para esta cidade.",
      scheduleDescription: "Consulte os horários publicados pelas operadoras locais.",
      scheduleTitle: "Horários disponíveis",
      scheduleWarning: "Os horários precisam ser confirmados com a operadora antes de serem apresentados como atuais.",
      accessibleTransport: "Transporte acessível",
      accessDescription: "Consulte informações sobre veículos adaptados, elevadores, rampas e pontos acessíveis.",
      accessConfirmation: "Os recursos só serão identificados como disponíveis quando houver confirmação dos dados da operadora.",
      highContrast: "Alto contraste",
      colorBlind: "Cores acessíveis",
      normalColors: "Cores normais",
      intercityTitle: "Transporte intermunicipal",
      intercityDescription: "Pesquise viagens entre cidades.",
      cityOrigin: "Cidade de origem",
      cityDestination: "Cidade de destino",
      cityOriginPlaceholder: "Ex.: Laranjeiras do Sul",
      cityDestinationPlaceholder: "Ex.: Londrina",
      searchIntercity: "Consultar viagem",
      intercityInitial: "Informe as cidades para pesquisar.",
      mapTitle: "Mapa de localização",
      worldMap: "Mapa mundial",
      footer: "ConectaRota — Mobilidade e acessibilidade.",
      country: "Escolha o país",
      state: "Escolha o estado",
      city: "Escolha a cidade",
      loadingCountries: "Carregando países...",
      loadingStates: "Carregando estados...",
      loadingCities: "Carregando cidades...",
      countriesError: "Erro ao carregar países",
      statesError: "Estados indisponíveis",
      citiesError: "Cidades indisponíveis",
      noStates: "Sem estados cadastrados",
      locating: "Localizando",
      cityError: "Não foi possível localizar a cidade.",
      geoUnsupported: "Seu navegador não oferece geolocalização.",
      gettingLocation: "Obtendo sua localização...",
      locationFound: "Localização encontrada.",
      locationError: "Não foi possível obter sua localização. Verifique a permissão do navegador.",
      yourLocation: "Sua localização",
      fillLocations: "Preencha a origem e o destino.",
      searching: "Pesquisando caminho...",
      routeFound: "Caminho encontrado!",
      routeError: "Não foi possível calcular o caminho. Confira os locais ou tente novamente.",
      carResult: "Resultado da rota de carro",
      distance: "Distância:",
      estimatedTime: "Tempo estimado:",
      origin: "Origem",
      destination: "Destino",
      carWarning: "Esta rota é para carro, não representa uma linha de ônibus.",
      cityRequired: "Informe a cidade de origem e a cidade de destino.",
      tripFound: "🚌 Viagem encontrada",
      tripSearch: "Consulta de viagem",
      connections: "Trajeto com conexões",
      departure: "Saída do Terminal Rodoviário.",
      firstConnection: "Primeira conexão de ônibus.",
      secondConnection: "Segunda conexão de ônibus.",
      arrival: "Chegada ao Terminal Rodoviário.",
      estimatedPrice: "Preço estimado",
      transport: "Transporte",
      bus: "Ônibus",
      transfers: "paradas de troca",
      important: "Importante:",
      tripWarning: "esta é uma estimativa de percurso. Os horários, preços, empresas e disponibilidade devem ser confirmados para o dia da viagem. Não é uma passagem reservada.",
      routeLink: "Consultar percurso e conexões",
      derLink: "Consultar o DER-PR",
      busSearch: "Consulte as opções de ônibus disponíveis para esse percurso.",
      generalWarning: "O ConectaRota ainda não possui uma base integrada de horários para todas as cidades. Confirme os dados diretamente com as empresas.",
      searchBus: "Pesquisar ônibus para esse destino",
      travelOptions: "Consultar opções de viagem"
    },

    en: {
      tagline: "Your transport, your way.",
      mainTitle: "Your transport, your way.",
      mainDescription: "Explore transport options and find your way.",
      tabPlan: "🧭 Plan a trip",
      tabLines: "🚌 Urban routes",
      tabSchedules: "🕒 Schedules",
      tabAccessibility: "♿ Accessibility",
      tabIntercity: "🚍 Intercity transport",
      originLabel: "Where are you departing from?",
      destinationLabel: "Where do you want to go?",
      originPlaceholder: "E.g.: Central Square",
      destinationPlaceholder: "E.g.: University",
      myLocation: "📍 My location",
      swap: "Swap",
      searchRoute: "Find route",
      routeInitial: "Choose your origin and destination to search.",
      routeNote: "This tool's route is for walking. It does not represent a bus route.",
      linesDescription: "Check public transport routes in the selected city.",
      linesUnavailable: "There is no confirmed urban route database for this city yet.",
      scheduleDescription: "Check schedules published by local operators.",
      scheduleTitle: "Available schedules",
      scheduleWarning: "Schedules must be confirmed with the operator before being presented as current.",
      accessibleTransport: "Accessible transport",
      accessDescription: "Check information about adapted vehicles, elevators, ramps and accessible stops.",
      accessConfirmation: "Features will only be identified as available when confirmed by the operator.",
      highContrast: "High contrast",
      colorBlind: "Accessible colors",
      normalColors: "Normal colors",
      intercityTitle: "Intercity transport",
      intercityDescription: "Search for trips between cities.",
      cityOrigin: "Departure city",
      cityDestination: "Destination city",
      cityOriginPlaceholder: "E.g.: Laranjeiras do Sul",
      cityDestinationPlaceholder: "E.g.: Londrina",
      searchIntercity: "Search trip",
      intercityInitial: "Enter the cities to search.",
      mapTitle: "Location map",
      worldMap: "World map",
      footer: "ConectaRota — Mobility and accessibility.",
      country: "Choose a country",
      state: "Choose a state",
      city: "Choose a city",
      loadingCountries: "Loading countries...",
      loadingStates: "Loading states...",
      loadingCities: "Loading cities...",
      countriesError: "Error loading countries",
      statesError: "States unavailable",
      citiesError: "Cities unavailable",
      noStates: "No states registered",
      locating: "Locating",
      cityError: "Could not locate the city.",
      geoUnsupported: "Your browser does not support geolocation.",
      gettingLocation: "Getting your location...",
      locationFound: "Location found.",
      locationError: "Could not get your location. Check your browser permissions.",
      yourLocation: "Your location",
      fillLocations: "Fill in the origin and destination.",
      searching: "Searching for route...",
      routeFound: "Route found!",
      routeError: "Could not calculate the route. Check the locations or try again.",
      carResult: "Driving route result",
      distance: "Distance:",
      estimatedTime: "Estimated time:",
      origin: "Origin",
      destination: "Destination",
      carWarning: "This route is for cars and does not represent a bus route.",
      cityRequired: "Enter the departure and destination cities.",
      tripFound: "🚌 Trip found",
      tripSearch: "Trip search",
      connections: "Route with connections",
      departure: "Departure from the bus terminal.",
      firstConnection: "First bus connection.",
      secondConnection: "Second bus connection.",
      arrival: "Arrival at the bus terminal.",
      estimatedPrice: "Estimated price",
      transport: "Transport",
      bus: "Bus",
      transfers: "transfers",
      important: "Important:",
      tripWarning: "This is an estimated route. Schedules, prices, companies and availability must be confirmed for the travel date. This is not a reserved ticket.",
      routeLink: "Check route and connections",
      derLink: "Check DER-PR",
      busSearch: "Check available bus options for this route.",
      generalWarning: "ConectaRota does not yet have an integrated schedule database for all cities. Confirm the information directly with the companies.",
      searchBus: "Search for buses to this destination",
      travelOptions: "Check travel options"
    },

    es: {
      tagline: "Tu transporte, tu camino.",
      mainTitle: "Tu transporte, tu camino.",
      mainDescription: "Consulta opciones de transporte y encuentra tu camino.",
      tabPlan: "🧭 Planificar viaje",
      tabLines: "🚌 Líneas urbanas",
      tabSchedules: "🕒 Horarios",
      tabAccessibility: "♿ Accesibilidad",
      tabIntercity: "🚍 Transporte intermunicipal",
      originLabel: "¿Desde dónde vas a salir?",
      destinationLabel: "¿Adónde quieres ir?",
      originPlaceholder: "Ej.: Plaza Central",
      destinationPlaceholder: "Ej.: Universidad",
      myLocation: "📍 Mi ubicación",
      swap: "Intercambiar",
      searchRoute: "Buscar ruta",
      routeInitial: "Elige el origen y el destino para buscar.",
      routeNote: "La ruta de esta herramienta es para caminar. No representa el recorrido de un autobús.",
      linesDescription: "Consulta las líneas de transporte público de la ciudad seleccionada.",
      linesUnavailable: "Todavía no hay una base de datos confirmada de líneas urbanas para esta ciudad.",
      scheduleDescription: "Consulta los horarios publicados por los operadores locales.",
      scheduleTitle: "Horarios disponibles",
      scheduleWarning: "Los horarios deben confirmarse con el operador antes de presentarse como actuales.",
      accessibleTransport: "Transporte accesible",
      accessDescription: "Consulta información sobre vehículos adaptados, ascensores, rampas y paradas accesibles.",
      accessConfirmation: "Los servicios solo se identificarán como disponibles cuando los datos sean confirmados por el operador.",
      highContrast: "Alto contraste",
      colorBlind: "Colores accesibles",
      normalColors: "Colores normales",
      intercityTitle: "Transporte intermunicipal",
      intercityDescription: "Busca viajes entre ciudades.",
      cityOrigin: "Ciudad de origen",
      cityDestination: "Ciudad de destino",
      cityOriginPlaceholder: "Ej.: Laranjeiras do Sul",
      cityDestinationPlaceholder: "Ej.: Londrina",
      searchIntercity: "Consultar viaje",
      intercityInitial: "Introduce las ciudades para buscar.",
      mapTitle: "Mapa de ubicación",
      worldMap: "Mapa mundial",
      footer: "ConectaRota — Movilidad y accesibilidad.",
      country: "Elige el país",
      state: "Elige el estado",
      city: "Elige la ciudad",
      loadingCountries: "Cargando países...",
      loadingStates: "Cargando estados...",
      loadingCities: "Cargando ciudades...",
      countriesError: "Error al cargar los países",
      statesError: "Estados no disponibles",
      citiesError: "Ciudades no disponibles",
      noStates: "No hay estados registrados",
      locating: "Localizando",
      cityError: "No se pudo localizar la ciudad.",
      geoUnsupported: "Tu navegador no admite la geolocalización.",
      gettingLocation: "Obteniendo tu ubicación...",
      locationFound: "Ubicación encontrada.",
      locationError: "No se pudo obtener tu ubicación. Comprueba los permisos del navegador.",
      yourLocation: "Tu ubicación",
      fillLocations: "Completa el origen y el destino.",
      searching: "Buscando ruta...",
      routeFound: "¡Ruta encontrada!",
      routeError: "No se pudo calcular la ruta. Comprueba las ubicaciones o inténtalo de nuevo.",
      carResult: "Resultado de la ruta en coche",
      distance: "Distancia:",
      estimatedTime: "Tiempo estimado:",
      origin: "Origen",
      destination: "Destino",
      carWarning: "Esta ruta es para coche y no representa una línea de autobús.",
      cityRequired: "Introduce la ciudad de origen y la ciudad de destino.",
      tripFound: "🚌 ¡Viaje encontrado!",
      tripSearch: "Consulta de viaje",
      connections: "Ruta con conexiones",
      departure: "Salida de la terminal de autobuses.",
      firstConnection: "Primera conexión de autobús.",
      secondConnection: "Segunda conexión de autobús.",
      arrival: "Llegada a la terminal de autobuses.",
      estimatedPrice: "Precio estimado",
      transport: "Transporte",
      bus: "Autobús",
      transfers: "transbordos",
      important: "Importante:",
      tripWarning: "Este es un recorrido estimado. Los horarios, precios, empresas y disponibilidad deben confirmarse para el día del viaje. No es un billete reservado.",
      routeLink: "Consultar recorrido y conexiones",
      derLink: "Consultar el DER-PR",
      busSearch: "Consulta las opciones de autobús disponibles para esta ruta.",
      generalWarning: "ConectaRota todavía no tiene una base integrada de horarios para todas las ciudades. Confirma los datos directamente con las empresas.",
      searchBus: "Buscar autobuses para este destino",
      travelOptions: "Consultar opciones de viaje"
    }
  };

  // =====================================
  // SISTEMA DE TRADUÇÃO
  // =====================================

  const languageSelect = document.getElementById("languageSelect");
  let currentLanguage = "pt";

  function t(key) {
    return translations[currentLanguage]?.[key]
      ?? translations.pt[key]
      ?? key;
  }

  function applyTranslations() {
    document.documentElement.lang =
      currentLanguage === "pt" ? "pt-BR" : currentLanguage;

    document.querySelectorAll("[data-i18n]").forEach(element => {
      const key = element.dataset.i18n;
      if (translations[currentLanguage][key] !== undefined) {
        element.textContent = t(key);
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
      element.placeholder = t(element.dataset.i18nPlaceholder);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(element => {
      element.setAttribute("aria-label", t(element.dataset.i18nAria));
    });

    // Atualiza mensagens de estado dos seletores.
    updateSelectPlaceholders();

    // Atualiza conteúdos dinâmicos.
    if (typeof refreshDynamicTranslations === "function") {
      refreshDynamicTranslations();
    }

    localStorage.setItem("conectarota-language", currentLanguage);
  }

  languageSelect.addEventListener("change", () => {
    currentLanguage = languageSelect.value;
    applyTranslations();
  });

  function updateSelectPlaceholders() {
    const country = document.getElementById("countrySelect");
    const state = document.getElementById("stateSelect");
    const city = document.getElementById("citySelect");

    [country, state, city].forEach(select => {
      if (select.options.length === 0) return;

      const first = select.options[0];
      if (first.value !== "") return;

      const original = first.dataset.message;
      if (original) first.textContent = t(original);
    });
  }

  function resetSelect(select, key) {
    select.innerHTML = "";

    const option = document.createElement("option");
    option.value = "";
    option.dataset.message = key;
    option.textContent = t(key);

    select.appendChild(option);
  }

  function addOptions(select, values) {
    values.forEach(value => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      select.appendChild(option);
    });
  }

  // =====================================
  // MAPA
  // =====================================

  const map = L.map("map").setView([-25.407, -52.416], 13);

  L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
    {
      attribution: "Tiles © Esri — Sources: Esri, HERE, Garmin",
      maxZoom: 19
    }
  ).addTo(map);

  let destinationMarker = null;
  let routeLayer = null;
  let currentLocationMarker = null;
  let routeMarkers = [];

  setTimeout(() => map.invalidateSize(), 300);

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    })[character]);
  }

  function normalize(value) {
    return value.normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase().trim();
  }

  // =====================================
  // PAÍSES, ESTADOS E CIDADES
  // =====================================

  const countrySelect = document.getElementById("countrySelect");
  const stateSelect = document.getElementById("stateSelect");
  const citySelect = document.getElementById("citySelect");
  const mapLocationName = document.getElementById("mapLocationName");

  const LOCATION_API = "https://countriesnow.space/api/v0.1";

  async function loadCountries() {
    resetSelect(countrySelect, "loadingCountries");

    try {
      const response = await fetch(`${LOCATION_API}/countries`);
      if (!response.ok) throw new Error("Countries error");

      const result = await response.json();
      if (!result.data) throw new Error("No countries");

      const countries = result.data
        .map(item => typeof item === "string" ? item : item.country)
        .filter(Boolean)
        .sort((a, b) => a.localeCompare(b));

      resetSelect(countrySelect, "country");
      addOptions(countrySelect, countries);

      countrySelect.value = "Brazil";
      countrySelect.dispatchEvent(new Event("change"));

    } catch (error) {
      console.error(error);
      resetSelect(countrySelect, "countriesError");
    }
  }

  countrySelect.addEventListener("change", async () => {
    const country = countrySelect.value;

    resetSelect(stateSelect, "loadingStates");
    resetSelect(citySelect, "city");

    stateSelect.disabled = true;
    citySelect.disabled = true;

    if (!country) return;

    try {
      const response = await fetch(`${LOCATION_API}/countries/states`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ country })
      });

      if (!response.ok) throw new Error("States error");

      const result = await response.json();

      const states = (result.data?.states || [])
        .map(item => typeof item === "string" ? item : item.name)
        .filter(Boolean)
        .sort((a, b) => a.localeCompare(b));

      resetSelect(stateSelect, states.length ? "state" : "noStates");
      addOptions(stateSelect, states);

      stateSelect.disabled = states.length === 0;

      if (!states.length) {
        await loadCitiesByCountry(country);
      }

    } catch (error) {
      console.error(error);
      resetSelect(stateSelect, "statesError");
    }
  });

  async function loadCitiesByCountry(country) {
    resetSelect(citySelect, "loadingCities");

    try {
      const response = await fetch(`${LOCATION_API}/countries/cities`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ country })
      });

      if (!response.ok) throw new Error("Cities error");

      const result = await response.json();
      const cities = (result.data || []).filter(Boolean)
        .sort((a, b) => a.localeCompare(b));

      resetSelect(citySelect, "city");
      addOptions(citySelect, cities);
      citySelect.disabled = cities.length === 0;

    } catch (error) {
      console.error(error);
      resetSelect(citySelect, "citiesError");
    }
  }

  stateSelect.addEventListener("change", async () => {
    const country = countrySelect.value;
    const state = stateSelect.value;

    resetSelect(citySelect, "loadingCities");
    citySelect.disabled = true;

    if (!country || !state) {
      resetSelect(citySelect, "city");
      return;
    }

    try {
      const response = await fetch(
        `${LOCATION_API}/countries/state/cities`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ country, state })
        }
      );

      if (!response.ok) throw new Error("Cities error");

      const result = await response.json();
      const cities = (result.data || []).filter(Boolean)
        .sort((a, b) => a.localeCompare(b));

      resetSelect(citySelect, "city");
      addOptions(citySelect, cities);
      citySelect.disabled = cities.length === 0;

    } catch (error) {
      console.error(error);
      resetSelect(citySelect, "citiesError");
    }
  });

  // =====================================
  // GEOCODIFICAÇÃO
  // =====================================

  async function geocode(place) {
    const url =
      "https://nominatim.openstreetmap.org/search?format=json&limit=1&q=" +
      encodeURIComponent(place);

    const response = await fetch(url);

    if (!response.ok) throw new Error("Geocoding error");

    const results = await response.json();
    if (!results.length) throw new Error("Location not found");

    return {
      lat: Number(results[0].lat),
      lon: Number(results[0].lon),
      name: results[0].display_name
    };
  }

  async function centerSelectedCity() {
    const country = countrySelect.value;
    const state = stateSelect.value;
    const city = citySelect.value;

    if (!country || !city) return;

    const search = [city, state, country].filter(Boolean).join(", ");
    mapLocationName.textContent = `${t("locating")} ${search}...`;

    try {
      const location = await geocode(search);

      map.setView([location.lat, location.lon], 13);

      if (destinationMarker) map.removeLayer(destinationMarker);

      destinationMarker = L.marker([location.lat, location.lon])
        .addTo(map)
        .bindPopup(`<strong>${escapeHTML(city)}</strong>`)
        .openPopup();

      mapLocationName.textContent = search;
      map.invalidateSize();

    } catch (error) {
      console.error(error);
      mapLocationName.textContent = t("cityError");
    }
  }

  citySelect.addEventListener("change", centerSelectedCity);

  // =====================================
  // ABAS
  // =====================================

  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;

      tabs.forEach(item => item.classList.remove("active"));
      tabContents.forEach(item => item.classList.remove("active"));

      tab.classList.add("active");

      document.getElementById(target)?.classList.add("active");

      setTimeout(() => map.invalidateSize(), 200);
    });
  });

  // =====================================
  // PLANEJAR ROTAS
  // =====================================

  const originInput = document.getElementById("origin");
  const destinationInput = document.getElementById("destination");
  const routeStatus = document.getElementById("routeStatus");
  const routeResults = document.getElementById("routeResults");

  document.getElementById("swapLocations").addEventListener("click", () => {
    const temporary = originInput.value;
    originInput.value = destinationInput.value;
    destinationInput.value = temporary;
  });

  document.getElementById("myLocation").addEventListener("click", () => {
    if (!navigator.geolocation) {
      routeStatus.textContent = t("geoUnsupported");
      return;
    }

    routeStatus.textContent = t("gettingLocation");

    navigator.geolocation.getCurrentPosition(
      position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        originInput.value = `${lat}, ${lon}`;

        map.setView([lat, lon], 16);

        if (currentLocationMarker) map.removeLayer(currentLocationMarker);

        currentLocationMarker = L.marker([lat, lon])
          .addTo(map)
          .bindPopup(t("yourLocation"))
          .openPopup();

        routeStatus.textContent = t("locationFound");
      },
      () => {
        routeStatus.textContent = t("locationError");
      },
      { enableHighAccuracy: true, timeout: 15000 }
    );
  });

  document.getElementById("searchRoute").addEventListener("click", async () => {
    const origin = originInput.value.trim();
    const destination = destinationInput.value.trim();

    if (!origin || !destination) {
      routeStatus.textContent = t("fillLocations");
      return;
    }

    routeStatus.textContent = t("searching");
    routeResults.innerHTML = "";

    try {
      const start = await geocode(origin);
      const end = await geocode(destination);

      const url =
        `https://router.project-osrm.org/route/v1/driving/` +
        `${start.lon},${start.lat};${end.lon},${end.lat}` +
        `?overview=full&geometries=geojson`;

      const response = await fetch(url);
      if (!response.ok) throw new Error("Routing unavailable");

      const result = await response.json();
      if (!result.routes?.length) throw new Error("No route");

      const route = result.routes[0];

      if (routeLayer) map.removeLayer(routeLayer);
      routeMarkers.forEach(marker => map.removeLayer(marker));
      routeMarkers = [];

      routeLayer = L.geoJSON(route.geometry, {
        style: {
          color: "#1557b7",
          weight: 6,
          opacity: 0.85
        }
      }).addTo(map);

      map.fitBounds(routeLayer.getBounds(), { padding: [30, 30] });

      routeMarkers.push(
        L.marker([start.lat, start.lon])
          .addTo(map).bindPopup(t("origin"))
      );

      routeMarkers.push(
        L.marker([end.lat, end.lon])
          .addTo(map).bindPopup(t("destination"))
      );

      const kilometers = (route.distance / 1000).toFixed(2);
      const minutes = Math.round(route.duration / 60);

      routeStatus.textContent = t("routeFound");

      routeResults.innerHTML = `
        <div class="info-card">
          <h3>${t("carResult")}</h3>
          <p><strong>${t("distance")}</strong> ${kilometers} km</p>
          <p><strong>${t("estimatedTime")}</strong> ${minutes} min</p>
          <p><strong>${t("origin")}:</strong> ${escapeHTML(origin)}</p>
          <p><strong>${t("destination")}:</strong> ${escapeHTML(destination)}</p>
          <p>${t("carWarning")}</p>
        </div>
      `;

    } catch (error) {
      console.error(error);
      routeStatus.textContent = t("routeError");
    }
  });

  // =====================================
  // TRANSPORTE INTERMUNICIPAL
  // =====================================

  const intercityOrigin = document.getElementById("intercityOrigin");
  const intercityDestination = document.getElementById("intercityDestination");
  const intercityResult = document.getElementById("intercityResult");

  document.getElementById("searchIntercity").addEventListener("click", () => {
    const origin = intercityOrigin.value.trim();
    const destination = intercityDestination.value.trim();

    if (!origin || !destination) {
      intercityResult.textContent = t("cityRequired");
      return;
    }

    const from = normalize(origin);
    const to = normalize(destination);

    const isLaranjeirasLondrina =
      from.includes("laranjeiras do sul") &&
      to.includes("londrina");

    if (isLaranjeirasLondrina) {
      intercityResult.innerHTML = `
        <div class="trip-result">
          <h3>${t("tripFound")}</h3>

          <p><strong>${t("origin")}:</strong> ${escapeHTML(origin)}</p>
          <p><strong>${t("destination")}:</strong> ${escapeHTML(destination)}</p>

          <h4>${t("connections")}</h4>

          <div class="route-steps">
            <div class="route-step">
              <span class="route-number">1</span>
              <div>
                <strong>Laranjeiras do Sul</strong>
                <p>${t("departure")}</p>
              </div>
            </div>

            <div class="route-step">
              <span class="route-number">2</span>
              <div>
                <strong>Guarapuava</strong>
                <p>${t("firstConnection")}</p>
              </div>
            </div>

            <div class="route-step">
              <span class="route-number">3</span>
              <div>
                <strong>Apucarana</strong>
                <p>${t("secondConnection")}</p>
              </div>
            </div>

            <div class="route-step">
              <span class="route-number">4</span>
              <div>
                <strong>Londrina</strong>
                <p>${t("arrival")}</p>
              </div>
            </div>
          </div>

          <div class="trip-summary">
            <div>
              <strong>${t("estimatedTime")}</strong>
              <span>7h50</span>
            </div>
            <div>
              <strong>${t("estimatedPrice")}</strong>
              <span>R$ 172 a R$ 315</span>
            </div>
            <div>
              <strong>${t("transport")}</strong>
              <span>${t("bus")}</span>
            </div>
            <div>
              <strong>${t("connections")}</strong>
              <span>2 ${t("transfers")}</span>
            </div>
          </div>

          <div class="trip-warning">
            <strong>${t("important")}</strong>
            ${t("tripWarning")}
          </div>

          <div class="trip-links">
            <a href="https://www.rome2rio.com/pt/s/Laranjeiras-do-Sul/Londrina"
               target="_blank" rel="noopener noreferrer">
              ${t("routeLink")}
            </a>
            <a href="https://www.der.pr.gov.br/"
               target="_blank" rel="noopener noreferrer">
              ${t("derLink")}
            </a>
          </div>
        </div>
      `;
    } else {
      const searchUrl =
        "https://www.google.com/search?q=" +
        encodeURIComponent(`ônibus de ${origin} para ${destination}`);

      const romeUrl =
        "https://www.rome2rio.com/pt/s/" +
        encodeURIComponent(origin.replaceAll(" ", "-")) +
        "/" +
        encodeURIComponent(destination.replaceAll(" ", "-"));

      intercityResult.innerHTML = `
        <div class="trip-result">
          <h3>${t("tripSearch")}</h3>
          <p><strong>${t("origin")}:</strong> ${escapeHTML(origin)}</p>
          <p><strong>${t("destination")}:</strong> ${escapeHTML(destination)}</p>
          <p>${t("busSearch")}</p>

          <div class="trip-warning">
            ${t("generalWarning")}
          </div>

          <div class="trip-links">
            <a href="${searchUrl}" target="_blank" rel="noopener noreferrer">
              ${t("searchBus")}
            </a>
            <a href="${romeUrl}" target="_blank" rel="noopener noreferrer">
              ${t("travelOptions")}
            </a>
            <a href="https://www.der.pr.gov.br/"
               target="_blank" rel="noopener noreferrer">
              ${t("derLink")}
            </a>
          </div>
        </div>
      `;
    }
  });

  // =====================================
  // ACESSIBILIDADE
  // =====================================

  document.getElementById("increaseFont").addEventListener("click", () => {
    const current = parseFloat(getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = Math.min(current + 2, 26) + "px";
  });

  document.getElementById("decreaseFont").addEventListener("click", () => {
    const current = parseFloat(getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = Math.max(current - 2, 12) + "px";
  });

  document.getElementById("highContrast").addEventListener("click", () => {
    document.body.classList.add("high-contrast");
    document.body.classList.remove("color-blind");
  });

  document.getElementById("colorBlindMode").addEventListener("click", () => {
    document.body.classList.add("color-blind");
    document.body.classList.remove("high-contrast");
  });

  document.getElementById("normalColors").addEventListener("click", () => {
    document.body.classList.remove("high-contrast", "color-blind");
  });

  // =====================================
  // ATUALIZAÇÃO DE CONTEÚDO DINÂMICO
  // =====================================

  function refreshDynamicTranslations() {
    if (routeResults.innerHTML.trim() && routeResults.dataset.language !== currentLanguage) {
      // Resultados novos já são criados com o idioma atual.
      routeResults.dataset.language = currentLanguage;
    }

    if (intercityResult.innerHTML.trim() && intercityResult.dataset.language !== currentLanguage) {
      // Os resultados de viagem são reconstruídos quando necessário.
      intercityResult.dataset.language = currentLanguage;
    }
  }

  // =====================================
  // INICIALIZAÇÃO
  // =====================================

  const savedLanguage =
    localStorage.getItem("conectarota-language") || "pt";

  currentLanguage = translations[savedLanguage] ? savedLanguage : "pt";
  languageSelect.value = currentLanguage;

  applyTranslations();

  loadCountries();

});
