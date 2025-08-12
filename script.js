document.addEventListener("DOMContentLoaded", () => {
  const ramos = [
    // PRIMER AÑO
    { id: "anatomia", nombre: "Anatomía humana normal y embriología", requisitos: [], año:1, semestre:1 },
    { id: "biologia", nombre: "Biología celular", requisitos: [], año:1, semestre:1 },
    { id: "fisica", nombre: "Física aplicada", requisitos: [], año:1, semestre:1 },
    { id: "introduccion", nombre: "Introducción a la odontología", requisitos: [], año:1, semestre:1 },
    { id: "habilidades", nombre: "Habilidades comunicativas", requisitos: [], año:1, semestre:1 },
    { id: "anatomia_aplicada", nombre: "Anatomía aplicada", requisitos: ["anatomia","biologia"], año:1, semestre:2 },
    { id: "quimica", nombre: "Química general e inorgánica", requisitos: [], año:1, semestre:2 },
    { id: "genetica", nombre: "Genética molecular humana", requisitos: ["biologia"], año:1, semestre:2 },
    { id: "histologia", nombre: "Histología general", requisitos: ["anatomia","biologia"], año:1, semestre:2 },
    { id: "introduccion_clinica", nombre: "Introducción a la clínica", requisitos: ["introduccion"], año:1, semestre:2 },
    { id: "ingles1", nombre: "Inglés I", requisitos: [], año:1, semestre:2 },
    // SEGUNDO AÑO
    { id: "biomateriales", nombre: "Biomateriales", requisitos: ["fisica","anatomia_aplicada","quimica"], año:2, semestre:0 },
    { id: "bioquimica", nombre: "Bioquímica general", requisitos: ["quimica","biologia"], año:2, semestre:1 },
    { id: "microbiologia", nombre: "Microbiología general", requisitos: ["genetica"], año:2, semestre:1 },
    { id: "patologia1", nombre: "Patología general", requisitos: ["genetica","histologia","anatomia_aplicada"], año:2, semestre:1 },
    { id: "histologia_oral", nombre: "Histología oral", requisitos: ["anatomia_aplicada","histologia"], año:2, semestre:1 },
    { id: "fisiologia", nombre: "Fisiología", requisitos: ["anatomia_aplicada","histologia"], año:2, semestre:1 },
    { id: "lab_fisiologia", nombre: "Laboratorio de fisiología", requisitos: ["anatomia_aplicada","histologia"], año:2, semestre:1 },
    { id: "ingles2", nombre: "Inglés II", requisitos: [], año:2, semestre:1 },
    { id: "bioquimica_oral", nombre: "Bioquímica oral", requisitos: ["bioquimica","histologia_oral"], año:2, semestre:2 },
    { id: "microbiologia_oral", nombre: "Microbiología oral", requisitos: ["bioquimica","microbiologia"], año:2, semestre:2 },
    { id: "patologia2", nombre: "Patología general II", requisitos: ["patologia1","fisiologia","lab_fisiologia"], año:2, semestre:2 },
    { id: "promo_salud", nombre: "Promoción y educación en salud", requisitos: ["introduccion_clinica"], año:2, semestre:2 },
    { id: "razonamiento", nombre: "Razonamiento científico", requisitos: ["habilidades"], año:2, semestre:2 },
    // TERCER AÑO
    { id: "patologia_dento", nombre: "Patología dentomaxilar", requisitos: ["patologia2","microbiologia_oral"], año:3, semestre:0 },
    { id: "imagenologia", nombre: "Imagenología", requisitos: ["patologia2"], año:3, semestre:0 },
    { id: "cirugia_bucal", nombre: "Cirugía bucal básica", requisitos: ["patologia2","microbiologia_oral"], año:3, semestre:0 },
    { id: "fisiologia_oral", nombre: "Fisiología oral y de la oclusión", requisitos: ["biomateriales"], año:3, semestre:0 },
    { id: "preclinico", nombre: "Preclínico integrado", requisitos: ["biomateriales"], año:3, semestre:0 },
    { id: "farmaco1", nombre: "Farmacología I", requisitos: ["bioquimica_oral","patologia2"], año:3, semestre:1 },
    { id: "ingles4", nombre: "Inglés IV", requisitos: [], año:3, semestre:1 },
    { id: "farmaco2", nombre: "Farmacología II", requisitos: ["farmaco1"], año:3, semestre:2 },
    { id: "cariologia", nombre: "Cariología", requisitos: ["microbiologia_oral","farmaco1","ingles4","promo_salud"], año:3, semestre:2 },
    // CUARTO AÑO
    { id: "cirugia_dento", nombre: "Cirugía dentomaxilar", requisitos: ["farmaco2","patologia_dento","imagenologia","cirugia_bucal"], año:4, semestre:0 },
    { id: "restauradora", nombre: "Odontología restauradora", requisitos: ["imagenologia","cirugia_bucal","preclinico","cariologia"], año:4, semestre:0 },
    { id: "protesis", nombre: "Prótesis dentomaxilar", requisitos: ["imagenologia","cirugia_bucal","fisiologia_oral","preclinico"], año:4, semestre:0 },
    { id: "endodoncia", nombre: "Endodoncia", requisitos: ["farmaco2","patologia_dento","imagenologia","cirugia_bucal","cariologia","preclinico"], año:4, semestre:0 },
    { id: "periodoncia", nombre: "Periodoncia clínica", requisitos: ["farmaco2","patologia_dento","imagenologia","cirugia_bucal","preclinico"], año:4, semestre:0 },
    { id: "patologia_maxilo", nombre: "Patología maxilofacial", requisitos: ["patologia_dento","imagenologia"], año:4, semestre:0 },
    { id: "salud_pub1", nombre: "Salud pública I", requisitos: ["cariologia"], año:4, semestre:1 },
    { id: "pensamiento", nombre: "Pensamiento crítico", requisitos: ["razonamiento"], año:4, semestre:1 },
    { id: "salud_pub2", nombre: "Salud pública II", requisitos: ["salud_pub1"], año:4, semestre:2 },
    // QUINTO AÑO (añadido semestres según necesidad)
    { id: "cirugia_maxilo", nombre: "Cirugía y traumatología maxilofacial", requisitos: ["cirugia_dento","patologia_maxilo"], año:5, semestre:0 },
    { id: "cirugia_adulto", nombre: "Cirugía integral del adulto y odontogeriatría", requisitos: ["restauradora","protesis","endodoncia","periodoncia"], año:5, semestre:0 },
    { id: "odontopediatria", nombre: "Odontopediatría", requisitos: ["cirugia_dento","restauradora","endodoncia"], año:5, semestre:0 },
    { id: "ortodoncia", nombre: "Ortodoncia y ortopedia dentomaxilar", requisitos: ["periodoncia"], año:5, semestre:0 },
    { id: "investigacion", nombre: "Metodología de la investigación", requisitos: ["salud_pub2"], año:5, semestre:1 },
    { id: "medicina_oral", nombre: "Medicina oral", requisitos: ["patologia_maxilo"], año:5, semestre:1 },
    { id: "etica", nombre: "Ética en la práctica odontológica", requisitos: ["salud_pub2"], año:5, semestre:1 },
    { id: "gestion", nombre: "Administración y gestión en salud", requisitos: ["salud_pub2","medicina_oral"], año:5, semestre:2 },
    { id: "legal", nombre: "Medicina legal", requisitos: ["medicina_oral"], año:5, semestre:2 },  
    { id: "social", nombre: "Responsabilidad social", requisitos: [], año:5, semestre:2 },
    // SEXTO AÑO
    { id: "internado", nombre: "Internado clínico", requisitos: ["cirugia_maxilo","cirugia_adulto","odontopediatria","ortodoncia","investigacion","legal","social"], año:6, semestre:0 },
    { id: "proyecto", nombre: "Proyecto integrado de investigación", requisitos: ["cirugia_maxilo","cirugia_adulto","odontopediatria","ortodoncia","investigacion","legal","social"], año:6, semestre:0 }
  ];

  const aprobados = new Set(JSON.parse(localStorage.getItem("ramosAprobados")||"[]"));
  function guardarEstado(){ localStorage.setItem("ramosAprobados", JSON.stringify([...aprobados])); }

  function crearRamo(ramo){
    const div = document.createElement("div");
    div.className = "ramo";
    div.id = ramo.id;
    div.textContent = ramo.nombre;
    const estado = document.createElement("span");
    estado.className = "estado";
    div.appendChild(estado);
    div.addEventListener("click", ()=>{
      if(!div.classList.contains("bloqueado")){
        if(aprobados.has(ramo.id)) aprobados.delete(ramo.id);
        else aprobados.add(ramo.id);
        guardarEstado();
        render();
      }
    });
    return div;
  }

  function render(){
    const cont = document.getElementById("malla");
    cont.innerHTML="";
    cont.className="grid-malla";
    const años=[...new Set(ramos.map(r=>r.año))].sort((a,b)=>a-b);
    años.forEach(año=>{
      const col = document.createElement("div");
      col.className="columna-ano";
      col.innerHTML=`<h2>Año ${año}</h2>`;
      ["Anual", "Semestre 1","Semestre 2"].forEach(sem=>{
        const num = sem==="Anual"?0:(sem==="Semestre 1"?1:2);
        const bloque=document.createElement("div");
        bloque.className="bloque-semestre";
        bloque.innerHTML=`<h3>${sem}</h3>`;
        ramos.filter(r=>r.año===año && r.semestre===num).forEach(r=>{
          const div=crearRamo(r);
          const ok=r.requisitos.every(req=>aprobados.has(req));
          const estado = div.querySelector(".estado");
          if(aprobados.has(r.id)){ div.classList.add("aprobado"); estado.textContent="Aprobado"; }
          else if(!ok){ div.classList.add("bloqueado"); estado.textContent="Bloqueado"; }
          else estado.textContent="Disponible";
          bloque.appendChild(div);
        });
        col.appendChild(bloque);
      });
      cont.appendChild(col);
    });
  }
  render();
});
