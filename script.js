console.log(2);

function langg() {
 document.addEventListener("DOMContentLoaded", function() {
document.addEventListener('DOMContentLoaded', () => {
  const n = document.getElementById("language").value;
});
document.getElementById("language").addEventListener('change', function() {
   lang = this.value;

console.log(lang);
return lang;

 })
});
}

langg();

const lg = langg();





function setLocalStorage() {

  localStorage.setItem('language', language.value);
}

window.addEventListener('beforeunload', setLocalStorage);


function getLocalStorage() {

  if (localStorage.getItem('language')) {
    language.value = localStorage.getItem('language');
  }
  

}

window.addEventListener('load', getLocalStorage);





function changeLanguage() {

   if (localStorage.getItem('language')) {
    language.value = localStorage.getItem('language');
   }


 if (language.value === 'ru') {
document.getElementById('aboutmyself1').innerHTML = "Обо мне";
document.getElementById('education1').innerHTML = "Образование";
document.getElementById('workexperience1').innerHTML = "Опыт работы";
document.getElementById('ownershipofsoftwareproducts1').innerHTML = "Владение программами";
document.getElementById('programmingskills1').innerHTML = "Навыки програмирования";
document.getElementById('professionalskills1').innerHTML = "Профессиональные навыки";
document.getElementById('strongsuit1').innerHTML = "Сильные стороны";
document.getElementById('achievements1').innerHTML = "Достижения";

document.getElementById('aboutmyself').innerHTML = "Обо мне";
document.getElementById('education').innerHTML = "Образование";
document.getElementById('workexperience').innerHTML = "Опыт работы";
document.getElementById('ownershipofsoftwareproducts').innerHTML = "Владение программами";
document.getElementById('programmingskills').innerHTML = "Навыки програмирования";
document.getElementById('professionalskills').innerHTML = "Профессиональные навыки";
document.getElementById('strongsuit').innerHTML = "Сильные стороны";
document.getElementById('achievements').innerHTML = "Достижения";

document.getElementById('age').innerHTML = "Возраст: 39 лет";
document.getElementById('email').innerHTML = `Эл.почта: <a href="mailto:my-wrk-ml@mail.ru">my-wrk-ml@mail.ru</a>`;

document.getElementById('higher-education').innerHTML = "Высшее образование:";
document.getElementById('higher-education-name').innerHTML = "2003-2008 - КГЭУ - «Электрические сети и системы» (Инженер)";

document.getElementById('postgraduate-study').innerHTML = "Аспирантура:";
document.getElementById('postgraduate-study-name').innerHTML = "2008-2011 - КГЭУ - «Электроэнергетические комплексы и системы»";

document.getElementById('professional-development').innerHTML = "Повышение квалификации:";
document.getElementById('professional-development-name1').innerHTML = "2009 - ННОУ «УМЦ ЛИНВИТ» (г.Москва) - «Управление качеством электрической энергии»;";
document.getElementById('professional-development-name2').innerHTML = "2010 - Камский ф-л ФГАОУ ДПО ПЭИПК - «Современные технологии организации эксплуатации электрооборудования электросетей»;";
document.getElementById('professional-development-name3').innerHTML = "2017 - ФГБОУ «УМК» Ростехнадзора (г.Москва) - «Организация строительного контроля на объектах капитального строительства. Модернизация и реконструкция объектов электросетевого хозяйства»;";
document.getElementById('professional-development-name4').innerHTML = "2023 - ИЦ «Сколково» (г.Москва) - «Инструменты создания инноваций на предприятии. Цифровая грамотность: управление проектами и продуктами».";

document.getElementById('courses').innerHTML = "Онлайн-курсы (самообразование):";
document.getElementById('course-1').innerHTML = `<a href="https://htmlacademy.ru/">HTML Академия</a> - "Основы HTML, CSS, JavaScript" (2022);`;
document.getElementById('course-2').innerHTML = `<a href="https://code-basics.com/">Code Basics</a> - Курсы по HTML, CSS, JavaScript (2022);`;
document.getElementById('course-3').innerHTML = `<a href="https://learn.javascript.ru//">Онлайн учебник по JS</a> - "JavaScript";`;
document.getElementById('course-4').innerHTML = `<a href="https://codewars.com/">CodeWars</a> - Некоторые задачи 7-6-5 kyu;`;
document.getElementById('course-5').innerHTML = `<a href="https://netology.ru/">Нетология</a> - "Старт в аналитике", "Основы Python: создаём ТГ-бота" (2024);`;
document.getElementById('course-6').innerHTML = `<a href="https://code-basics.com//">Code Basics</a> - "Курс по языку программирования Python" (2024);`;
document.getElementById('course-7').innerHTML = `<a href="https://ru.hexlet.io/">Хекслет</a> - "Введение в программирование", "Основы языка Python" (2024);`;
document.getElementById('course-8').innerHTML = `<a href="https://practicum.yandex.ru/">Яндекс-Практикум</a> - "Основы анализа данных и Python" (2025).`;


document.getElementById('date').innerHTML = "Период";
document.getElementById('organization').innerHTML = "Организация";
document.getElementById('post').innerHTML = "Должность";
document.getElementById('organization-name1').innerHTML = "Управление ТСО (г.Казань)";
document.getElementById('post-name1').innerHTML = "Ведущий специалист отдела развития ПВД";
document.getElementById('organization-name2').innerHTML = "Филиал ТСО (г.Казань)";
document.getElementById('post-name2').innerHTML = "Заместитель начальника ПТО";
document.getElementById('organization-name3').innerHTML = "Филиал ТСО (г.Казань)";
document.getElementById('post-name3').innerHTML = "Инженер 2 категории ПТО по организации ремонта электротехнического оборудования";
document.getElementById('organization-name4').innerHTML = "Филиал ТСО (г.Казань)";
document.getElementById('post-name4').innerHTML = "Инженер ПТО группы по контролю качества электроэнергии";
document.getElementById('organization-name5').innerHTML = "Филиал ТСО (г.Казань)";
document.getElementById('post-name5').innerHTML = "Техник 2 категории ПТО группы по контролю качества электроэнергии";
document.getElementById('organization-name6').innerHTML = "Филиал ТСО (г.Казань)";
document.getElementById('post-name6').innerHTML = "Техник отдела систем учёта электроэнергии и технического аудита";

document.getElementById('direction').innerHTML = "Направление";
document.getElementById('programms').innerHTML = "Программные продукты";
document.getElementById('direction-name1').innerHTML = "Офисные";
document.getElementById('direction-name2').innerHTML = "Графические";
document.getElementById('graphic-programm').innerHTML = "CorelDraw, Компас, Autocad";
document.getElementById('direction-name3').innerHTML = "Аналитические";
document.getElementById('direction-name4').innerHTML = "Моделирование";
document.getElementById('direction-name5').innerHTML = "Специализированные";
document.getElementById('special-programm').innerHTML = "ИС «Е-Net», IBM Cognos TM1, РТП-3, GE Smallworld Electric Office, Zabbix";

document.getElementById('skill1').innerHTML = "Умение создавать/разрабатывать новые инструменты и решения в рабочих задачах, а также осуществлять автоматизацию рутинного труда;";
document.getElementById('skill2').innerHTML = "Умение разрабатывать сопроводительную методическую документацию;";
document.getElementById('skill3').innerHTML = "Опыт выступления на научно-практических конференция и публикации научных статей в журналах ВАК;";
document.getElementById('skill4').innerHTML = "Опыт руководящей работы и опыт организации межфункционального взаимодействия различных подразделений предприятия;";
document.getElementById('skill5').innerHTML = "Знание и умение применять основы методологии «Теории решения изобретательских задач» (ТРИЗ);";
document.getElementById('skill6').innerHTML = "Навыки вёрстки сайтов и программирования на JS, Python, работа c IDE, GitHub и Figma;";
document.getElementById('skill7').innerHTML = "Чтение и составление однолинейных схем электроснабжения;";
document.getElementById('skill8').innerHTML = "Умение выполнять расчёты режимов работы, показателей надёжности электрических сетей и показателей качества электроэнергии;";
document.getElementById('skill9').innerHTML = "Умение работать с проектно-сметной документацией по ремонту/строительству/реконструкции объектов электросетевого хозяйства и ЗиС;";
document.getElementById('skill10').innerHTML = "Умение проверять акты приёмки выполненных работ (КС-2) на соответствие запланированным объёмам работ (смете, дефектной, ресурсной ведомости) и принимать объекты электросетевого хозяйства и ЗиС из ремонта (физическое выполнение работ и документация);";
document.getElementById('skill11').innerHTML = "Умение работать с нормативно-технической документацией.";

document.getElementById('strong1').innerHTML = "Аналитическое, системное, абстрактно-логическое, пространственное и нестандартное мышление;";
document.getElementById('strong2').innerHTML = "Любознательность, широкий кругозор, эрудиция, быстрая обучаемость;";
document.getElementById('strong3').innerHTML = "Основательность, качественное выполнение поставленных задач, ориентированность на результат;";
document.getElementById('strong4').innerHTML = "Способность к работе с информацией, организации, анализу большого количество данных, нахождению закономерностей и противоречий;";
document.getElementById('strong5').innerHTML = "Способность мыслить последовательно и четко, умение видеть существенное и главное, выделять перспективные возможности и выбрать перспективные стратегии развития, выдвигать новые идеи, предлагать решения;";
document.getElementById('strong6').innerHTML = "Способность к работе с числами, выполнение расчетов, анализу закономерности в числовых рядах, решению задач на пространственное мышление, анализу рисунков, чертежей, схем;";
document.getElementById('strong7').innerHTML = "Склонность к инновационной деятельности, созданию новых инструментов / решений / концепций;";
document.getElementById('strong8').innerHTML = "Способность провести декомпозицию задачи, разработать и реализовать алгоритм решения задачи (определить и формализовать последовательность необходимых действий), предложить структуру создаваемого решения / инструмента;";
document.getElementById('strong9').innerHTML = "Умение выявлять отклонения, «узкие места», предлагать решения возникших проблем;";
document.getElementById('strong10').innerHTML = "Умение в короткие сроки изучить новую предметную область, определить ключевые факторы, в том числе необходимые для принятия решений;";
document.getElementById('strong11').innerHTML = "Способность выстроить необходимые процессы, организовать и наладить работу в новой предметной области, умение разработать необходимое методологическое сопровождение;";
document.getElementById('strong12').innerHTML = "Способность к кропотливой, требующей высокой точности и аккуратности работе, самообучению;";
document.getElementById('strong13').innerHTML = "Самоорганизовать, способность расставлять приоритеты;";
document.getElementById('strong14').innerHTML = "Способность принимать самостоятельные решения, ответственность;";
document.getElementById('strong15').innerHTML = "Умение отстаивать собственную точку зрения;";
document.getElementById('strong16').innerHTML = "Умение ставить задачи.";

document.getElementById('projects').innerHTML = "Реализованные проекты:";
document.getElementById('project-acordion').innerHTML = "Аккордион";
document.getElementById('project-keyboard').innerHTML = "Виртуальная клавиатура";
//document.getElementById('project-map').innerHTML = "Карта нагрузок";


document.getElementById('ach-1').innerHTML = "В школьные годы участник олимпиад по математике, физике, географии, призёр городской олимпиады по математике (3-е место).";
document.getElementById('ach-2').innerHTML = "Школа окончена с серебряной медалью, ВУЗ (ФГБОУ ВО «КГЭУ») – с красным дипломом.";
document.getElementById('ach-3').innerHTML = "Дипломная работа по итогам Всероссийского конкурса ВКР по специальности «Электроэнергетические системы и сети» признана лучшим научно-исследовательским проектом (2008).";
document.getElementById('ach-4').innerHTML = "На второй год работы (2009) –  победитель (1-е место) IV ежегодной молодежная научно-практическая конференция компании (г.Казань). Неоднократно участвовал в научно-практических конференциях как регионального, так и российского и международного уровня (участник 8-ми научно-практических конференций).";
document.getElementById('ach-5').innerHTML = "Мною в соавторстве опубликовано 4 научных публикации в журналах, рецензируемых ВАК, и 5 научных публикаций в сборниках материалов научно-практических конференций.";
document.getElementById('ach-6').innerHTML = "Завершено обучение в аспирантуре по направлению «Электроэнергетические комплексы и системы» (2011).";
document.getElementById('ach-7').innerHTML = "Разработал и внедрил:";
document.getElementById('ach-8').innerHTML = "- 27 рационализаторских предложений, 11 из них приняты к тиражированию в целом по всей компании;";
document.getElementById('ach-9').innerHTML = "- более 15-ти программ и расчётных модулей, направленных на создание новых решений, мониторинг и обеспечение выполнение KPI, а также автоматизацию и повышение производительности труда;";
document.getElementById('ach-10').innerHTML = "- 4 методики (методических указаний) в целях организации и упорядочения работы;";
document.getElementById('ach-11').innerHTML = "- 3 проекта по улучшению деятельности (кайдзен-проекта), в том числе один проект с годовым экономическим эффектом более 1,5 млн рублей (снижение транспортных затрат и потерь времени).";
document.getElementById('ach-12').innerHTML = "Мною разработана, внедрена и усовершенствована система расчёта и визуализации текущих значений показателей надёжностей электроснабжения SAIDI, SAIFI в режиме условно-реального времени, которая тиражирована и в других филиалах компании.";
document.getElementById('ach-13').innerHTML = "Признан Лучшим рационализатором как филиала, так и компании в целом по итогам 2021 года.";
document.getElementById('ach-14').innerHTML = "Победитель регионального конкурса «Инженер года» по направлению «Энергетика» (2021).";
document.getElementById('ach-15').innerHTML = "Стажировка на базе ИЦ «Сколково» (г. Москва) по результатам победы в региональном конкурсе «Инженер года 2021».";




} else if (language.value === 'en') {
document.getElementById('aboutmyself1').innerHTML = "About myself";
document.getElementById('education1').innerHTML = "Education";
document.getElementById('workexperience1').innerHTML = "Work experience";
document.getElementById('ownershipofsoftwareproducts1').innerHTML = "Ownership of software products";
document.getElementById('programmingskills1').innerHTML = "Programming skills";
document.getElementById('professionalskills1').innerHTML = "Professional skills";
document.getElementById('strongsuit1').innerHTML = "Strong suit";
document.getElementById('achievements1').innerHTML = "Achievements";

document.getElementById('aboutmyself').innerHTML = "About myself";
document.getElementById('education').innerHTML = "Education";
document.getElementById('workexperience').innerHTML = "Work experience";
document.getElementById('ownershipofsoftwareproducts').innerHTML = "Ownership of software products";
document.getElementById('programmingskills').innerHTML = "Programming skills";
document.getElementById('professionalskills').innerHTML = "Professional skills";
document.getElementById('strongsuit').innerHTML = "Strong suit";
document.getElementById('achievements').innerHTML = "Achievements";

document.getElementById('age').innerHTML = "Age: 39 years";
document.getElementById('email').innerHTML = `E-mail: <a href="mailto:my-wrk-ml@mail.ru">my-wrk-ml@mail.ru</a>`;

document.getElementById('higher-education').innerHTML = "Higher education:";
document.getElementById('higher-education-name').innerHTML = "2003-2008 - KSEU - «Electrical Networks and Systems» (Engineer)";

document.getElementById('postgraduate-study').innerHTML = "Postgraduate study:";
document.getElementById('postgraduate-study-name').innerHTML = "2008-2011 - КSEU - «Electric power complexes and systems»";

document.getElementById('professional-development').innerHTML = "Professional development:";
document.getElementById('professional-development-name1').innerHTML = "2009 - NNEI APE «EMC LINVIT» (Moscow) - «Electric Power Quality Management»;";
document.getElementById('professional-development-name2').innerHTML = "2010 - Kama branch FSAEI APE PEIPD - «Modern technologies for organizing the operation of electrical equipment in power grids»;";
document.getElementById('professional-development-name3').innerHTML = "2017 - FSBEI Rostekhnadzor Educational and Methodological Office (Moscow) - «Organization of construction supervision at capital construction sites. Modernization and reconstruction of power grid facilities»;";
document.getElementById('professional-development-name4').innerHTML = "2023 - Skolkovo Innovation Center (Moscow) - «Tools for creating innovations at the enterprise. Digital literacy: project and product management».";

document.getElementById('courses').innerHTML = "Online courses (self-education):";
document.getElementById('course-1').innerHTML = `<a href="https://htmlacademy.ru/">HTML Academy</a> - "The basics HTML, CSS, JavaScript" (2022);`;
document.getElementById('course-2').innerHTML = `<a href="https://code-basics.com/">Code Basics</a> - Courses on HTML, CSS, JavaScript (2022);`;
document.getElementById('course-3').innerHTML = `<a href="https://learn.javascript.ru//">Online tutorial on JS</a> - "JavaScript";`;
document.getElementById('course-4').innerHTML = `<a href="https://codewars.com/">CodeWars</a> - Some tasks 7-6-5 kyu;`;
document.getElementById('course-5').innerHTML = `<a href="https://netology.ru/">Netology</a> - "Getting started in Analytics", "Python Basics: Creating a TG bot" (2024);`;
document.getElementById('course-6').innerHTML = `<a href="https://code-basics.com//">Code Basics</a> - "Python Programming Language Course" (2024);`;
document.getElementById('course-7').innerHTML = `<a href="https://ru.hexlet.io/">Hexlet</a> - "Introduction to programming", "Basics of the Python language" (2024);`;
document.getElementById('course-8').innerHTML = `<a href="https://practicum.yandex.ru/">Yandex-Practicum</a> - "Fundamentals of Data Analysis and Python" (2025).`;

document.getElementById('date').innerHTML = "Period";
document.getElementById('organization').innerHTML = "Organization";
document.getElementById('post').innerHTML = "Post";
document.getElementById('organization-name1').innerHTML = "Management of a TNO (Kazan)";
document.getElementById('post-name1').innerHTML = "The leading specialist of the department of development of other types of activity";
document.getElementById('organization-name2').innerHTML = "Branch of a TNO (Kazan)";
document.getElementById('post-name2').innerHTML = "Deputy head of the PTD";
document.getElementById('organization-name3').innerHTML = "Branch of a TNO (Kazan)";
document.getElementById('post-name3').innerHTML = "Engineer in the PTD for organizing the repair of electrical equipment";
document.getElementById('organization-name4').innerHTML = "Branch of a TNO (Kazan)";
document.getElementById('post-name4').innerHTML = "Engineer of the PTD of the electricity quality control group";
document.getElementById('organization-name5').innerHTML = "Branch of a TNO (Kazan)";
document.getElementById('post-name5').innerHTML = "Technician in the PTD of the electricity quality control group";
document.getElementById('organization-name6').innerHTML = "Branch of a TNO (Kazan)";
document.getElementById('post-name6').innerHTML = "Technician of the Department of Electricity Accounting and Technical Audit";

document.getElementById('direction').innerHTML = "Direction";
document.getElementById('programms').innerHTML = "Software products";
document.getElementById('direction-name1').innerHTML = "Office";
document.getElementById('direction-name2').innerHTML = "Graphic";
document.getElementById('graphic-programm').innerHTML = "CorelDraw, Kompas, Autocad";
document.getElementById('direction-name3').innerHTML = "Analytical";
document.getElementById('direction-name4').innerHTML = "Simulation";
document.getElementById('direction-name5').innerHTML = "Specialized";
document.getElementById('special-programm').innerHTML = "IS «Е-Net», IBM Cognos TM1, Calculation of Technological Losses - 3, GE Smallworld Electric Office, Zabbix";

document.getElementById('skill1').innerHTML = "The ability to create/develop new tools and solutions for work tasks, as well as to automate routine work;";
document.getElementById('skill2').innerHTML = "The ability to develop accompanying methodological documentation;";
document.getElementById('skill3').innerHTML = "Experience in speaking at scientific and practical conferences and publishing scientific articles in journals of the Higher Attestation Commission;";
document.getElementById('skill4').innerHTML = "Experience in management and experience in organizing cross-functional cooperation between different departments of an enterprise;";
document.getElementById('skill5').innerHTML = "Knowledge and ability to apply the fundamentals of the Theory of Inventive Problem Solving methodology;";
document.getElementById('skill6').innerHTML = "Skills in website layout and programming in JS, Python, IDE, GitHub, and Figma;";
document.getElementById('skill7').innerHTML = "Reading and drawing single-line power supply diagrams;";
document.getElementById('skill8').innerHTML = "Ability to perform calculations of operating modes, reliability indicators of electrical networks, and indicators of electricity quality;";
document.getElementById('skill9').innerHTML = "Ability to work with design and estimate documentation for the repair/construction/reconstruction of power grid facilities and buildings and structures;";
document.getElementById('skill10').innerHTML = "The ability to check the acceptance certificates for compliance with the planned scope of work (budget, defect list, and resource list) and to accept electrical network facilities and buildings and structures from repair (physical completion of work and documentation);";
document.getElementById('skill11').innerHTML = "The ability to work with regulatory and technical documentation.";


document.getElementById('strong1').innerHTML = "Analytical, systemic, abstract-logical, spatial, and non-standard thinking;";
document.getElementById('strong2').innerHTML = "Curiosity, broad outlook, erudition, and quick learning;";
document.getElementById('strong3').innerHTML = "Thoroughness, high-quality performance of assigned tasks, and focus on results;";
document.getElementById('strong4').innerHTML = "The ability to work with information, organize it, analyze large amounts of data, and find patterns and contradictions;";
document.getElementById('strong5').innerHTML = "The ability to think consistently and clearly, to see the essential and important, to identify promising opportunities and choose promising development strategies, to come up with new ideas, and to propose solutions;";
document.getElementById('strong6').innerHTML = "Ability to work with numbers, perform calculations, analyze patterns in numerical series, solve spatial thinking problems, and analyze drawings, plans, and schemes;";
document.getElementById('strong7').innerHTML = "A tendency towards innovation and the creation of new tools / solutions / concepts;";
document.getElementById('strong8').innerHTML = "The ability to decompose a task, develop and implement a task solution algorithm (define and formalize the sequence of necessary actions), and propose the structure of the solution / tool being created;";
document.getElementById('strong9').innerHTML = "The ability to identify deviations and bottlenecks and propose solutions to the problems that arise;";
document.getElementById('strong10').innerHTML = "The ability to quickly learn a new subject area and identify key factors, including those necessary for decision-making;";
document.getElementById('strong11').innerHTML = "The ability to build the necessary processes, organize and establish work in a new subject area, and develop the necessary methodological support;";
document.getElementById('strong12').innerHTML = "The ability to perform meticulous work that requires high precision and accuracy, as well as self-learning;";
document.getElementById('strong13').innerHTML = "Self-organization and the ability to prioritize;";
document.getElementById('strong14').innerHTML = "The ability to make independent decisions, responsibility;";
document.getElementById('strong15').innerHTML = "The ability to defend your own point of view;";
document.getElementById('strong16').innerHTML = "The ability to set tasks.";


document.getElementById('projects').innerHTML = "Completed projects:";
document.getElementById('project-acordion').innerHTML = "Accordion";
document.getElementById('project-keyboard').innerHTML = "Virtual Keyboard";
//document.getElementById('project-map').innerHTML = "Load map";


document.getElementById('ach-1').innerHTML = "During his school years, he participated in Olympiads in mathematics, physics, geography, and won the city Olympiad in Mathematics (3rd place).";
document.getElementById('ach-2').innerHTML = "The school graduated with a silver medal, the university (KSEU) – with a red diploma.";
document.getElementById('ach-3').innerHTML = "The thesis was recognized as the best research project at the All-Russian Competition of Final Qualification Theses in the field of Electric Power Systems and Networks (2008).";
document.getElementById('ach-4').innerHTML = "In the second year of work (2009), he was the winner (1st place) of the IV Annual Youth Scientific and Practical Conference of the company (Kazan). He has repeatedly participated in scientific and practical conferences at both regional, national, and international levels (participant of 8 scientific and practical conferences).";
document.getElementById('ach-5').innerHTML = "I have co-authored 4 scientific publications in journals reviewed by the Higher Attestation Commission and 5 scientific publications in collections of materials from scientific and practical conferences.";
document.getElementById('ach-6').innerHTML = "I completed my postgraduate studies in the field of Electric Power Complexes and Systems (2011).";
document.getElementById('ach-7').innerHTML = "Developed and implemented:";
document.getElementById('ach-8').innerHTML = "- 27 rationalization proposals, 11 of which have been adopted for replication throughout the company;";
document.getElementById('ach-9').innerHTML = "- more than 15 programs and calculation modules aimed at creating new solutions, monitoring and ensuring the implementation of KPI, as well as automating and increasing labor productivity;";
document.getElementById('ach-10').innerHTML = "- 4 methods (guidelines) for organizing and streamlining work;";
document.getElementById('ach-11').innerHTML = "- 3 projects to improve operations (kaizen projects), including one project with an annual economic effect of more than 1.5 million rubles (reduction of transportation costs and time losses).";
document.getElementById('ach-12').innerHTML = "I have developed, implemented, and improved the system for calculating and visualizing the current values of SAIDI and SAIFI power supply reliability indicators in pseudo-real time, which has been replicated in other branches of the company.";
document.getElementById('ach-13').innerHTML = "I was recognized as the Best Rationalizer of both the branch and the company as a whole in 2021.";
document.getElementById('ach-14').innerHTML = "Winner of the regional «Engineer of the Year» competition in the field of Energy (2021).";
document.getElementById('ach-15').innerHTML = "Internship at the Skolkovo Innovation Center (Moscow) based on the results of the regional competition «Engineer of the Year 2021».";

} 

}


window.addEventListener('load', changeLanguage);


 document.getElementById("language").addEventListener("change", function(){
   if (this.value === 'ru') {
document.getElementById('aboutmyself1').innerHTML = "Обо мне";
document.getElementById('education1').innerHTML = "Образование";
document.getElementById('workexperience1').innerHTML = "Опыт работы";
document.getElementById('ownershipofsoftwareproducts1').innerHTML = "Владение программами";
document.getElementById('programmingskills1').innerHTML = "Навыки програмирования";
document.getElementById('professionalskills1').innerHTML = "Профессиональные навыки";
document.getElementById('strongsuit1').innerHTML = "Сильные стороны";
document.getElementById('achievements1').innerHTML = "Достижения";

document.getElementById('aboutmyself').innerHTML = "Обо мне";
document.getElementById('education').innerHTML = "Образование";
document.getElementById('workexperience').innerHTML = "Опыт работы";
document.getElementById('ownershipofsoftwareproducts').innerHTML = "Владение программами";
document.getElementById('programmingskills').innerHTML = "Навыки програмирования";
document.getElementById('professionalskills').innerHTML = "Профессиональные навыки";
document.getElementById('strongsuit').innerHTML = "Сильные стороны";
document.getElementById('achievements').innerHTML = "Достижения";

document.getElementById('age').innerHTML = "Возраст: 39 лет";
document.getElementById('email').innerHTML = `Эл.почта: <a href="mailto:my-wrk-ml@mail.ru">my-wrk-ml@mail.ru</a>`;

document.getElementById('higher-education').innerHTML = "Высшее образование:";
document.getElementById('higher-education-name').innerHTML = "2003-2008 - КГЭУ - «Электрические сети и системы» (Инженер)";

document.getElementById('postgraduate-study').innerHTML = "Аспирантура:";
document.getElementById('postgraduate-study-name').innerHTML = "2008-2011 - КГЭУ - «Электроэнергетические комплексы и системы»";

document.getElementById('professional-development').innerHTML = "Повышение квалификации:";
document.getElementById('professional-development-name1').innerHTML = "2009 - ННОУ «УМЦ ЛИНВИТ» (г.Москва) - «Управление качеством электрической энергии»;";
document.getElementById('professional-development-name2').innerHTML = "2010 - Камский ф-л ФГАОУ ДПО ПЭИПК - «Современные технологии организации эксплуатации электрооборудования электросетей»;";
document.getElementById('professional-development-name3').innerHTML = "2017 - ФГБОУ «УМК» Ростехнадзора (г.Москва) - «Организация строительного контроля на объектах капитального строительства. Модернизация и реконструкция объектов электросетевого хозяйства»;";
document.getElementById('professional-development-name4').innerHTML = "2023 - ИЦ «Сколково» (г.Москва) - «Инструменты создания инноваций на предприятии. Цифровая грамотность: управление проектами и продуктами».";

document.getElementById('courses').innerHTML = "Онлайн-курсы (самообразование):";
document.getElementById('course-1').innerHTML = `<a href="https://htmlacademy.ru/">HTML Академия</a> - "Основы HTML, CSS, JavaScript" (2022);`;
document.getElementById('course-2').innerHTML = `<a href="https://code-basics.com/">Code Basics</a> - Курсы по HTML, CSS, JavaScript (2022);`;
document.getElementById('course-3').innerHTML = `<a href="https://learn.javascript.ru//">Онлайн учебник по JS</a> - "JavaScript";`;
document.getElementById('course-4').innerHTML = `<a href="https://codewars.com/">CodeWars</a> - Некоторые задачи 7-6-5 kyu;`;
document.getElementById('course-5').innerHTML = `<a href="https://netology.ru/">Нетология</a> - "Старт в аналитике", "Основы Python: создаём ТГ-бота" (2024);`;
document.getElementById('course-6').innerHTML = `<a href="https://code-basics.com//">Code Basics</a> - "Курс по языку программирования Python" (2024);`;
document.getElementById('course-7').innerHTML = `<a href="https://ru.hexlet.io/">Хекслет</a> - "Введение в программирование", "Основы языка Python" (2024);`;
document.getElementById('course-8').innerHTML = `<a href="https://practicum.yandex.ru/">Яндекс-Практикум</a> - "Основы анализа данных и Python" (2025).`;

document.getElementById('date').innerHTML = "Период";
document.getElementById('organization').innerHTML = "Организация";
document.getElementById('post').innerHTML = "Должность";
document.getElementById('organization-name1').innerHTML = "Управление ТСО (г.Казань)";
document.getElementById('post-name1').innerHTML = "Ведущий специалист отдела развития ПВД";
document.getElementById('organization-name2').innerHTML = "Филиал ТСО (г.Казань)";
document.getElementById('post-name2').innerHTML = "Заместитель начальника ПТО";
document.getElementById('organization-name3').innerHTML = "Филиал ТСО (г.Казань)";
document.getElementById('post-name3').innerHTML = "Инженер 2 категории ПТО по организации ремонта электротехнического оборудования";
document.getElementById('organization-name4').innerHTML = "Филиал ТСО (г.Казань)";
document.getElementById('post-name4').innerHTML = "Инженер ПТО группы по контролю качества электроэнергии";
document.getElementById('organization-name5').innerHTML = "Филиал ТСО (г.Казань)";
document.getElementById('post-name5').innerHTML = "Техник 2 категории ПТО группы по контролю качества электроэнергии";
document.getElementById('organization-name6').innerHTML = "Филиал ТСО (г.Казань)";
document.getElementById('post-name6').innerHTML = "Техник отдела систем учёта электроэнергии и технического аудита";

document.getElementById('direction').innerHTML = "Направление";
document.getElementById('programms').innerHTML = "Программные продукты";
document.getElementById('direction-name1').innerHTML = "Офисные";
document.getElementById('direction-name2').innerHTML = "Графические";
document.getElementById('graphic-programm').innerHTML = "CorelDraw, Компас, Autocad";
document.getElementById('direction-name3').innerHTML = "Аналитические";
document.getElementById('direction-name4').innerHTML = "Моделирование";
document.getElementById('direction-name5').innerHTML = "Специализированные";
document.getElementById('special-programm').innerHTML = "ИС «Е-Net», IBM Cognos TM1, РТП-3, GE Smallworld Electric Office, Zabbix";

document.getElementById('skill1').innerHTML = "Умение создавать/разрабатывать новые инструменты и решения в рабочих задачах, а также осуществлять автоматизацию рутинного труда;";
document.getElementById('skill2').innerHTML = "Умение разрабатывать сопроводительную методическую документацию;";
document.getElementById('skill3').innerHTML = "Опыт выступления на научно-практических конференция и публикации научных статей в журналах ВАК;";
document.getElementById('skill4').innerHTML = "Опыт руководящей работы и опыт организации межфункционального взаимодействия различных подразделений предприятия;";
document.getElementById('skill5').innerHTML = "Знание и умение применять основы методологии «Теории решения изобретательских задач» (ТРИЗ);";
document.getElementById('skill6').innerHTML = "Навыки вёрстки сайтов и программирования на JS, Python, работа c IDE, GitHub и Figma;";
document.getElementById('skill7').innerHTML = "Чтение и составление однолинейных схем электроснабжения;";
document.getElementById('skill8').innerHTML = "Умение выполнять расчёты режимов работы, показателей надёжности электрических сетей и показателей качества электроэнергии;";
document.getElementById('skill9').innerHTML = "Умение работать с проектно-сметной документацией по ремонту/строительству/реконструкции объектов электросетевого хозяйства и ЗиС;";
document.getElementById('skill10').innerHTML = "Умение проверять акты приёмки выполненных работ (КС-2) на соответствие запланированным объёмам работ (смете, дефектной, ресурсной ведомости) и принимать объекты электросетевого хозяйства и ЗиС из ремонта (физическое выполнение работ и документация);";
document.getElementById('skill11').innerHTML = "Умение работать с нормативно-технической документацией.";


document.getElementById('strong1').innerHTML = "Аналитическое, системное, абстрактно-логическое, пространственное и нестандартное мышление;";
document.getElementById('strong2').innerHTML = "Любознательность, широкий кругозор, эрудиция, быстрая обучаемость;";
document.getElementById('strong3').innerHTML = "Основательность, качественное выполнение поставленных задач, ориентированность на результат;";
document.getElementById('strong4').innerHTML = "Способность к работе с информацией, организации, анализу большого количество данных, нахождению закономерностей и противоречий;";
document.getElementById('strong5').innerHTML = "Способность мыслить последовательно и четко, умение видеть существенное и главное, выделять перспективные возможности и выбрать перспективные стратегии развития, выдвигать новые идеи, предлагать решения;";
document.getElementById('strong6').innerHTML = "Способность к работе с числами, выполнение расчетов, анализу закономерности в числовых рядах, решению задач на пространственное мышление, анализу рисунков, чертежей, схем;";
document.getElementById('strong7').innerHTML = "Склонность к инновационной деятельности, созданию новых инструментов / решений / концепций;";
document.getElementById('strong8').innerHTML = "Способность провести декомпозицию задачи, разработать и реализовать алгоритм решения задачи (определить и формализовать последовательность необходимых действий), предложить структуру создаваемого решения / инструмента;";
document.getElementById('strong9').innerHTML = "Умение выявлять отклонения, «узкие места», предлагать решения возникших проблем;";
document.getElementById('strong10').innerHTML = "Умение в короткие сроки изучить новую предметную область, определить ключевые факторы, в том числе необходимые для принятия решений;";
document.getElementById('strong11').innerHTML = "Способность выстроить необходимые процессы, организовать и наладить работу в новой предметной области, умение разработать необходимое методологическое сопровождение;";
document.getElementById('strong12').innerHTML = "Способность к кропотливой, требующей высокой точности и аккуратности работе, самообучению;";
document.getElementById('strong13').innerHTML = "Самоорганизовать, способность расставлять приоритеты;";
document.getElementById('strong14').innerHTML = "Способность принимать самостоятельные решения, ответственность;";
document.getElementById('strong15').innerHTML = "Умение отстаивать собственную точку зрения;";
document.getElementById('strong16').innerHTML = "Умение ставить задачи.";

document.getElementById('projects').innerHTML = "Реализованные проекты:";
document.getElementById('project-acordion').innerHTML = "Аккордион";
document.getElementById('project-keyboard').innerHTML = "Виртуальная клавиатура";
//document.getElementById('project-map').innerHTML = "Карта нагрузок";


document.getElementById('ach-1').innerHTML = "В школьные годы участник олимпиад по математике, физике, географии, призёр городской олимпиады по математике (3-е место).";
document.getElementById('ach-2').innerHTML = "Школа окончена с серебряной медалью, ВУЗ (ФГБОУ ВО «КГЭУ») – с красным дипломом.";
document.getElementById('ach-3').innerHTML = "Дипломная работа по итогам Всероссийского конкурса ВКР по специальности «Электроэнергетические системы и сети» признана лучшим научно-исследовательским проектом (2008).";
document.getElementById('ach-4').innerHTML = "На второй год работы (2009) –  победитель (1-е место) IV ежегодной молодежная научно-практическая конференция компании (г.Казань). Неоднократно участвовал в научно-практических конференциях как регионального, так и российского и международного уровня (участник 8-ми научно-практических конференций).";
document.getElementById('ach-5').innerHTML = "Мною в соавторстве опубликовано 4 научных публикации в журналах, рецензируемых ВАК, и 5 научных публикаций в сборниках материалов научно-практических конференций.";
document.getElementById('ach-6').innerHTML = "Завершено обучение в аспирантуре по направлению «Электроэнергетические комплексы и системы» (2011).";
document.getElementById('ach-7').innerHTML = "Разработал и внедрил:";
document.getElementById('ach-8').innerHTML = "- 27 рационализаторских предложения, 11 из них приняты к тиражированию в целом по всей компании;";
document.getElementById('ach-9').innerHTML = "- более 15-ти программ и расчётных модулей, направленных на создание новых решений, мониторинг и обеспечение выполнение KPI, а также автоматизацию и повышение производительности труда;";
document.getElementById('ach-10').innerHTML = "- 4 методики (методических указаний) в целях организации и упорядочения работы;";
document.getElementById('ach-11').innerHTML = "- 3 проекта по улучшению деятельности (кайдзен-проекта), в том числе один проект с годовым экономическим эффектом более 1,5 млн рублей (снижение транспортных затрат и потерь времени).";
document.getElementById('ach-12').innerHTML = "Мною разработана, внедрена и усовершенствована система расчёта и визуализации текущих значений показателей надёжностей электроснабжения SAIDI, SAIFI в режиме условно-реального времени, которая тиражирована и в других филиалах компании.";
document.getElementById('ach-13').innerHTML = "Признан Лучшим рационализатором как филиала, так и компании в целом по итогам 2021 года.";
document.getElementById('ach-14').innerHTML = "Победитель регионального конкурса «Инженер года» по направлению «Энергетика» (2021).";
document.getElementById('ach-15').innerHTML = "Стажировка на базе ИЦ «Сколково» (г. Москва) по результатам победы в региональном конкурсе «Инженер года 2021».";

} else if (this.value === 'en') {
document.getElementById('aboutmyself').innerHTML = "About myself";
document.getElementById('education').innerHTML = "Education";
document.getElementById('workexperience').innerHTML = "Work experience";
document.getElementById('ownershipofsoftwareproducts').innerHTML = "Ownership of software products";
document.getElementById('programmingskills').innerHTML = "Programming skills";
document.getElementById('professionalskills').innerHTML = "Professional skills";
document.getElementById('strongsuit').innerHTML = "Strong suit";
document.getElementById('achievements').innerHTML = "Achievements";

document.getElementById('aboutmyself1').innerHTML = "About myself";
document.getElementById('education1').innerHTML = "Education";
document.getElementById('workexperience1').innerHTML = "Work experience";
document.getElementById('ownershipofsoftwareproducts1').innerHTML = "Ownership of software products";
document.getElementById('programmingskills1').innerHTML = "Programming skills";
document.getElementById('professionalskills1').innerHTML = "Professional skills";
document.getElementById('strongsuit1').innerHTML = "Strong suit";
document.getElementById('achievements1').innerHTML = "Achievements";

document.getElementById('age').innerHTML = "Age: 39 years";
document.getElementById('email').innerHTML = `E-mail: <a href="mailto:my-wrk-ml@mail.ru">my-wrk-ml@mail.ru</a>`;

document.getElementById('higher-education').innerHTML = "Higher education:";
document.getElementById('higher-education-name').innerHTML = "2003-2008 - KSEU - «Electrical Networks and Systems» (Engineer)";
document.getElementById('postgraduate-study').innerHTML = "Postgraduate study:";
document.getElementById('postgraduate-study-name').innerHTML = "2008-2011 - КSEU - «Electric power complexes and systems»";

document.getElementById('professional-development').innerHTML = "Professional development:";
document.getElementById('professional-development-name1').innerHTML = "2009 - NNEI APE «EMC LINVIT» (Moscow) - «Electric Power Quality Management»;";
document.getElementById('professional-development-name2').innerHTML = "2010 - Kama branch FSAEI APE PEIPD - «Modern technologies for organizing the operation of electrical equipment in power grids»;";
document.getElementById('professional-development-name3').innerHTML = "2017 - FSBEI Rostekhnadzor Educational and Methodological Office (Moscow) - «Organization of construction supervision at capital construction sites. Modernization and reconstruction of power grid facilities»;";
document.getElementById('professional-development-name4').innerHTML = "2023 - Skolkovo Innovation Center (Moscow) - «Tools for creating innovations at the enterprise. Digital literacy: project and product management».";

document.getElementById('courses').innerHTML = "Online courses (self-education):";
document.getElementById('course-1').innerHTML = `<a href="https://htmlacademy.ru/">HTML Academy</a> - "The basics HTML, CSS, JavaScript" (2022);`;
document.getElementById('course-2').innerHTML = `<a href="https://code-basics.com/">Code Basics</a> - Courses on HTML, CSS, JavaScript (2022);`;
document.getElementById('course-3').innerHTML = `<a href="https://learn.javascript.ru//">Online tutorial on JS</a> - "JavaScript";`;
document.getElementById('course-4').innerHTML = `<a href="https://codewars.com/">CodeWars</a> - Some tasks 7-6-5 kyu;`;
document.getElementById('course-5').innerHTML = `<a href="https://netology.ru/">Netology</a> - "Getting started in Analytics", "Python Basics: Creating a TG bot" (2024);`;
document.getElementById('course-6').innerHTML = `<a href="https://code-basics.com//">Code Basics</a> - "Python Programming Language Course" (2024);`;
document.getElementById('course-7').innerHTML = `<a href="https://ru.hexlet.io/">Hexlet</a> - "Introduction to programming", "Basics of the Python language" (2024);`;
document.getElementById('course-8').innerHTML = `<a href="https://practicum.yandex.ru/">Yandex-Practicum</a> - "Fundamentals of Data Analysis and Python" (2025).`;

document.getElementById('date').innerHTML = "Period";
document.getElementById('organization').innerHTML = "Organization";
document.getElementById('post').innerHTML = "Post";
document.getElementById('organization-name1').innerHTML = "Management of a TNO (Kazan)";
document.getElementById('post-name1').innerHTML = "The leading specialist of the department of development of other types of activity";
document.getElementById('organization-name2').innerHTML = "Branch of a TNO (Kazan)";
document.getElementById('post-name2').innerHTML = "Deputy head of the PTD";
document.getElementById('organization-name3').innerHTML = "Branch of a TNO (Kazan)";
document.getElementById('post-name3').innerHTML = "Engineer the PTD for organizing the repair of electrical equipment";
document.getElementById('organization-name4').innerHTML = "Branch of a TNO (Kazan)";
document.getElementById('post-name4').innerHTML = "Engineer of the PTD of the electricity quality control group";
document.getElementById('organization-name5').innerHTML = "Branch of a TNO (Kazan)";
document.getElementById('post-name5').innerHTML = "Technician in the PTD of the electricity quality control group";
document.getElementById('organization-name6').innerHTML = "Branch of a TNO (Kazan)";
document.getElementById('post-name6').innerHTML = "Technician of the Department of Electricity Accounting and Technical Audit";

document.getElementById('direction').innerHTML = "Direction";
document.getElementById('programms').innerHTML = "Software products";
document.getElementById('direction-name1').innerHTML = "Office";
document.getElementById('direction-name2').innerHTML = "Graphic";
document.getElementById('graphic-programm').innerHTML = "CorelDraw, Kompas, Autocad";
document.getElementById('direction-name3').innerHTML = "Analytical";
document.getElementById('direction-name4').innerHTML = "Simulation";
document.getElementById('direction-name5').innerHTML = "Specialized";
document.getElementById('special-programm').innerHTML = "IS «Е-Net», IBM Cognos TM1, Calculation of Technological Losses - 3, GE Smallworld Electric Office, Zabbix";


document.getElementById('skill1').innerHTML = "The ability to create/develop new tools and solutions for work tasks, as well as to automate routine work;";
document.getElementById('skill2').innerHTML = "The ability to develop accompanying methodological documentation;";
document.getElementById('skill3').innerHTML = "Experience in speaking at scientific and practical conferences and publishing scientific articles in journals of the Higher Attestation Commission;";
document.getElementById('skill4').innerHTML = "Experience in management and experience in organizing cross-functional cooperation between different departments of an enterprise;";
document.getElementById('skill5').innerHTML = "Knowledge and ability to apply the fundamentals of the Theory of Inventive Problem Solving methodology;";
document.getElementById('skill6').innerHTML = "Skills in website layout and programming in JS, Python, IDE, GitHub, and Figma;";
document.getElementById('skill7').innerHTML = "Reading and drawing single-line power supply diagrams;";
document.getElementById('skill8').innerHTML = "Ability to perform calculations of operating modes, reliability indicators of electrical networks, and indicators of electricity quality;";
document.getElementById('skill9').innerHTML = "Ability to work with design and estimate documentation for the repair/construction/reconstruction of power grid facilities and buildings and structures;";
document.getElementById('skill10').innerHTML = "The ability to check the acceptance certificates for compliance with the planned scope of work (budget, defect list, and resource list) and to accept electrical network facilities and buildings and structures from repair (physical completion of work and documentation);";
document.getElementById('skill11').innerHTML = "The ability to work with regulatory and technical documentation.";


document.getElementById('strong1').innerHTML = "Analytical, systemic, abstract-logical, spatial, and non-standard thinking;";
document.getElementById('strong2').innerHTML = "Curiosity, broad outlook, erudition, and quick learning;";
document.getElementById('strong3').innerHTML = "Thoroughness, high-quality performance of assigned tasks, and focus on results;";
document.getElementById('strong4').innerHTML = "The ability to work with information, organize it, analyze large amounts of data, and find patterns and contradictions;";
document.getElementById('strong5').innerHTML = "The ability to think consistently and clearly, to see the essential and important, to identify promising opportunities and choose promising development strategies, to come up with new ideas, and to propose solutions;";
document.getElementById('strong6').innerHTML = "Ability to work with numbers, perform calculations, analyze patterns in numerical series, solve spatial thinking problems, and analyze drawings, plans, and schemes;";
document.getElementById('strong7').innerHTML = "A tendency towards innovation and the creation of new tools / solutions / concepts;";
document.getElementById('strong8').innerHTML = "The ability to decompose a task, develop and implement a task solution algorithm (define and formalize the sequence of necessary actions), and propose the structure of the solution / tool being created;";
document.getElementById('strong9').innerHTML = "The ability to identify deviations and bottlenecks and propose solutions to the problems that arise;";
document.getElementById('strong10').innerHTML = "The ability to quickly learn a new subject area and identify key factors, including those necessary for decision-making;";
document.getElementById('strong11').innerHTML = "The ability to build the necessary processes, organize and establish work in a new subject area, and develop the necessary methodological support;";
document.getElementById('strong12').innerHTML = "The ability to perform meticulous work that requires high precision and accuracy, as well as self-learning;";
document.getElementById('strong13').innerHTML = "Self-organization and the ability to prioritize;";
document.getElementById('strong14').innerHTML = "The ability to make independent decisions, responsibility;";
document.getElementById('strong15').innerHTML = "The ability to defend your own point of view;";
document.getElementById('strong16').innerHTML = "The ability to set tasks.";

document.getElementById('projects').innerHTML = "Completed projects:";
document.getElementById('project-acordion').innerHTML = "Accordion";
document.getElementById('project-keyboard').innerHTML = "Virtual Keyboard";
//document.getElementById('project-map').innerHTML = "Load map";


document.getElementById('ach-1').innerHTML = "During his school years, he participated in Olympiads in mathematics, physics, geography, and won the city Olympiad in Mathematics (3rd place).";
document.getElementById('ach-2').innerHTML = "The school graduated with a silver medal, the university (KSEU) – with a red diploma.";
document.getElementById('ach-3').innerHTML = "The thesis was recognized as the best research project at the All-Russian Competition of Final Qualification Theses in the field of Electric Power Systems and Networks (2008).";
document.getElementById('ach-4').innerHTML = "In the second year of work (2009), he was the winner (1st place) of the IV Annual Youth Scientific and Practical Conference of the company (Kazan). He has repeatedly participated in scientific and practical conferences at both regional, national, and international levels (participant of 8 scientific and practical conferences).";
document.getElementById('ach-5').innerHTML = "I have co-authored 4 scientific publications in journals reviewed by the Higher Attestation Commission and 5 scientific publications in collections of materials from scientific and practical conferences.";
document.getElementById('ach-6').innerHTML = "I completed my postgraduate studies in the field of Electric Power Complexes and Systems (2011).";
document.getElementById('ach-7').innerHTML = "Developed and implemented:";
document.getElementById('ach-8').innerHTML = "- 27 rationalization proposals, 11 of which have been adopted for replication throughout the company;";
document.getElementById('ach-9').innerHTML = "- more than 15 programs and calculation modules aimed at creating new solutions, monitoring and ensuring the implementation of KPI, as well as automating and increasing labor productivity;";
document.getElementById('ach-10').innerHTML = "- 4 methods (guidelines) for organizing and streamlining work;";
document.getElementById('ach-11').innerHTML = "- 3 projects to improve operations (kaizen projects), including one project with an annual economic effect of more than 1.5 million rubles (reduction of transportation costs and time losses).";
document.getElementById('ach-12').innerHTML = "I have developed, implemented, and improved the system for calculating and visualizing the current values of SAIDI and SAIFI power supply reliability indicators in pseudo-real time, which has been replicated in other branches of the company.";
document.getElementById('ach-13').innerHTML = "I was recognized as the Best Rationalizer of both the branch and the company as a whole in 2021.";
document.getElementById('ach-14').innerHTML = "Winner of the regional «Engineer of the Year» competition in the field of Energy (2021).";
document.getElementById('ach-15').innerHTML = "Internship at the Skolkovo Innovation Center (Moscow) based on the results of the regional competition «Engineer of the Year 2021».";
} 
    });
