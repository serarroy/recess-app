import React, {useState} from 'react'
import '../stylesheets/MainPage.css'


function MainPage() {
    const [character, setCharacter] = useState('null');
    const map = new Map();

    map.set('null', {age:'',gender:'',home:''})
    map.set('TJ Detweiler', {
                            full_name:  'Theodore Jasper Detweiler',
                            age: 9,
                            gender: 'Male',
                            home: "Three houses down from Spinelli's Home",
                            description: "T.J. is the leader of the main six kids on the show and has been best friends with them since kindergarten (except Gus, who moved to town in the first episode, however, he has also been shown in kindergarten with the rest of the kids). He is outgoing, kindhearted, friendly, and takes having fun very seriously. He also appears to have a good sense of honor, which was demonstrated when he realized how wrong it was to take advantage of Finster while she was injured and when he discovered an envelope with money and decided to give it back to its rightful owner rather than keep or spend it. While he is prone to occasional lapses of ignorance and laziness, he consistently executes playground schemes that improve the lives of him and his friends. Despite being more heavy-set than the other five members of the gang (except for Mikey of course), he is capable of pulling a few stunts, such as escaping detention by climbing either out the window or from the roof of the school a few times. In second grade, he invented the word 'whomps', which is what the kids of the playground use instead of 'stinks' or 'sucks' to describe an unpleasant situation or person."
                            });
    map.set('Vince LaSalle', {
                            full_name:  'Vincent Pierre LaSalle',
                            age: 9,
                            gender: 'Male',
                            home: "-",
                            description: "Vince's superior athletic abilities compared to those of his friends often made him egoistic. However, deep down, he knows how important his friends are to him. He is also very competitive and often competes with Lawson and his gang. In the Recess Gang, he and Spinelli are considered T.J.'s right hand man."
    });
    map.set('Ashley Spinelli', {
                            full_name:  'Ashley Funicello Spinelli',
                            age: 9,
                            gender: 'Female',
                            home: "A house that straight down from T.J.'s house",
                            description: "She is interested in wrestling and is known as the toughest kid on the playground. She is rebellious, obstinate, and frequently uses violence or threats when something is troubling her. However, she appears to have a soft side, such as stopping herself from clobbering Randall J. Weems with a dirt clod to get a kitten out of a tree (which she gently talks to get it to come to her) which turns out to be Miss Finster's cat. T.J. also mentions that even though she is tough, she will stand up for any kid on the playground who needs help. She hates talking about her parents because they embarrass her. Spinelli's parents are unsuccessful for telling her friends about her feelings or showing them her childhood photos. Spinelli is Italian-American."
    });
    map.set('Gretchen Grundler', {
        full_name:  'Gretchen Priscilla Grundler',
        age: 9,
        gender: 'Female',
        home: "-",
        description: "Gretchen is the smartest of the main kids in the show. In a few episodes, it is shown that she is smarter than almost everyone else in town, as shown in 'A Genius Among Us', where it is established that she is smarter than most of the teachers. She is a mathematics, engineering, chemistry and physics probity. Gretchen is also somewhat of a big sister to the main six, usually to T.J. and Gus. She often argues with Vince but appears to be very close to him as well, hinting that she may have feelings for him. Out of all the members of the main six, Gretchen usually hangs out with Spinelli. In addition to her intelligence and beauty, she can also be sweet, and a bit naive."
    });
    map.set('Mickey Blumberg', {
        full_name:  'Michael Robert Blumberg',
        age: 9,
        gender: 'Male',
        home: "-",
        description: "Many think that Mikey is a bully just because of his height, but, as once described by T.J. Detweiler, 'he wouldn't hurt a fly'. There is a hidden agenda about Mikey, and that is his love for 'Bonky the Dinosaur', a dinosaur similar to Barney the dinosaur loved by kindergartners in the episode 'Bonky Fever'. He also appears to be the naivest of the group, despite being the oldest. Mikey has a passion for arts, especially singing and poetry."
    });
    map.set('Gus Griswald', {
        full_name:  'Gustav Patton Griswald',
        age: 9,
        gender: 'Male',
        home: "-",
        description: "Gus is a good-natured if occasionally naive boy as his recent attendance at Third Street made him aware of the school's traditions such as the kindergarten derby. He is also a master at dodgeball and has never been beaten under a pseudonym of 'El Diablo'. During his tenure at an old school he attended, he gave up on dodgeball after an incident in which he accidentally hit a small boy with a dodgeball leaving the boy too afraid to go to the playground. Gus is an Army brat meaning he is a child from a military family, in this case the US Army, and often calls his dad 'Sir'. Gus sometimes is paranoid and usually, power goes to his head. In 'King Gus' he became King of the Playground, and he began bossing the other children around and creating a 'cookie tax'. In 'Germ Warfare', he wanted to get rid of germs and disinfect the world thinking that all germs are evil which put him in conflict with Mikey who treated germs as friends."
    });
    map.set('Randall Weems', {
        full_name: 'Randall J. Weems',
        age: 9,
        gender: 'Male',
        home: "-",
        description: "Randall is the most hated kid in school for his snitching, resulting in him being banned from the Fifth and Sixth Graders' Club. There are times he wants to be accepted but will not stop snitching since he has a friendship with Miss Finster. He also has a standard for snitching, as there are certain things he won't tell on a person for. He sometimes can be an antagonist to the gang. For example, he took over the playground with Menlo in the episode Partners in Crime. He is shown to be a coward and often runs away screaming when confronted for his snitching ways."
    });
    map.set('Erwin Lawson', {
        full_name: 'Erwin Lawson',
        age: 10,
        gender: 'Male',
        home: "-",
        description: "His personality is akin to a bully jock. He is shown to be mean, rude, and competitive towards his lessers and equals of Third Street. He is presented to be athletic, not to mention obnoxious and at times, and ruthless. His blatant lack of originality has been seen on more than one occasion in the series. Apart from his work with his crew, he does not seem to know much else other than sports. He seems to be jealous of the Recess Gang's popularity, one time causing him to create a similar crew."
    });
    map.set('The Diggers', {
        full_name: 'Digger Dave and Digger Sam',
        age: 10,
        gender: 'Male',
        home: "-",
        description: "Digger Dave and Digger Sam, collectively referred to as The Diggers, are always seen digging during Recess at Third Street School. This arcane skill is a commodity on the playground; they are often contracted to dig in several episodes. Dave often considers his way the only way to do things, and when he and Sam got into a fight, he kept lecturing the others on how to do things they already do well, even so far as to try and teach the Upside-Down Girl how to hang upside down. He becomes less bossy when he and Sam get back together."
    });
    map.set('King Bob', {
        full_name: 'Robert "King Bob"',
        age: 11,
        gender: 'Male',
        home: "-",
        description: "Robert 'King Bob' is the king of the Third Street School playground. He has a very demanding and impatient personality, yet he is an honest and fair ruler. His best friends are Jordan and Jerome, his advisers. King Bob has a demanding, overbearing, impatient, but at times, an honorable personality. He also has knowledge of many of the rules of the playground as well as the unwritten student code of honor. Prior to becoming king, he was the Prankster Prince, a title he earned by pranking the king of the playground of the time, King Sid. On the few times he is pranked, he obsesses over pranking back the perpetrator, going so far as to abandon his duties for some time."
    });
    map.set('Butch', {
        full_name: 'Butch',
        age: 10,
        gender: 'Male',
        home: "-",
        description: "Butch is the bearer of bad news and the one who usually tells the scary stories from his older brother's school days, oftentimes as a warning against something the gang would be trying to do at the time. Butch has a rather gloomy personality, which befits his position as the one who tells scary stories. It is implied that he became that way because of him seeing his brother kiss a girl. He also seems to take pleasure in scaring people for some reason, but he does not seem like a mean person, either. He is also very intelligent, as he helps the gang piece together scattered pieces of evidence when the balls were recalled. It is relatively unknown whether he is friendly with the gang or not. Butch is usually seen in a dark gray T-shirt, blue jeans, brown shoes, a black leather jacket, and a toothpick in his mouth. His most striking feature is a white streak in his brown hair that he got in the same incident that may have shaped his current personality. Before the incident, he had normal brown hair, and a simple outfit of a beige shirt, brown pants, and presumably the same shoes."
    });
    map.set('Dr. Slicer', {
        full_name: 'Unknown',
        age: 60,
        gender: 'Male',
        home: "-",
        description: "Dr. Slicer is a rather strict and militant teacher. He only appears in the episode 'Prickly is Leaving'. However, in his one appearance, he has gained a reputation for being rather disproportionately ruthless and cruel. He is addressed as a doctor. He is a minor antagonist of the episode. Nothing much is known about Dr. Slicer's past. It is stated he graduated from an unknown university with 'a Ph.D.' in discipline with a minor in punishment. Moreover, he may have been in the military at some point considering his demeanor. He dislikes pranksters, or 'funny boys,' because according to him one gave him a scar during a prank involving electromagnets. When Principal Prickly accepts a job as the principal of a middle school, Dr. Slicer is hired to replace him at Third Street. Dr. Slicer is a cruel, vindictive, strict, megalomaniac, and overly militant teacher who wants students to act like 'soldiers' and not like kids. He is very cruel, dislikes feelings and calls emotions sappiness, thinking that emotions make people weak. This makes him a (only marginally) family-friendly caricature of a Nazi general in many ways."
    });
    map.set('The Kindergartners', {
        full_name: '-',
        age: '-',
        gender: 'Male and female',
        home: "-",
        description: "The Kindergartners are young children who are often shown to be the antagonist of the show and unpredictable. They appear to have formed a sort of tribal, savage society of warrior-like and wild children, without many rules. Their leader is Captain Sticky. The Kindergartners play in their own separate part of the playground. They also have a space considered to be dangerous to everyone, as it is full of traps. They can sometimes be seen in the regular playground, although it is behind a fence. The kindergartners do many things in their free time. In the show this includes wearing face paint, being violent with other (usually older) children, carry very weak crafted weapons and napping (which is sleeping during the day)."
    });
    map.set('Hank', {
        full_name: 'Unknown',
        age: 50,
        gender: 'Male',
        home: "-",
        description: "Hank is a minor, recurring character, who is the Third Street School janitor and repairman in Recess. Despite his menial job, Hank is actually a mathematical genius surpassing even Gretchen. However, he prefers to treat it exclusively as a hobby."
    });
    map.set('Miss Lemon', {
        full_name: 'Unknown',
        age: 60,
        gender: 'Female',
        home: "-",
        description: "Miss Lemon is the secretary and receptionist of Third Street School whom Menlo works for. She can be seen using a typewriter. She seems to be a bit of a grumpy old lady. She always wears a pastel yellow top with periwinkle pants, pink socks, brown shoes, green studded earrings, pastel pink and yellow bracelet, gold rings, short gray hair, and red lipstick."
    });
    map.set('Miss Finster', {
        full_name: 'Muriel P. Finster',
        age: 60,
        gender: 'Female',
        home: "-",
        description: "Muriel P. Finster, often referred to as just Finster, Miss Finster, or Muriel, is an administrative assistant (later fifth-grade teacher, previously Kindergarten teacher) who is the children's constant nemesis on the playground and is the main antagonist (and sometimes an anti-hero) of the series. She is the best friend of Principal Peter Prickly. Muriel has a strong desire for a school in which children are not allowed to have fun or act like children. She is feared by all the children and is always closely followed by her teacher's pet, the equally nefarious Randall J. Weems, who is also largely despised by the other students. Her disposition plays an important part in maintaining stability within the society of the playground providing a common enemy for the children of Third Street School, as shown in the times when she is not fulfilling her duties and the playground devolves into a war zone. Though she loves harsh punishments, she even has a limit to how far things should go. Such as being visibly shocked when she hears that the Mayor's Council has planned to split the gang send the children to different schools."
    });
    map.set('Principal Prickly', {
        full_name: 'Peter Prickly',
        age: 50,
        gender: 'Male',
        home: "-",
        description: "Peter 'Petey' Prickly better known as Principal Prickly is the principal of Third Street School and the secondary anti-hero of the series. He is the childhood friend of Muriel Finster. Even though he is about as strict as Miss Finster, he is not megalomaniacal, and he is seen in various episodes actually caring about the students. This does not mean that he is always nice to them. He has a complicated relationship with The Recess Gang, more notably with T.J. thanks to the boy's almost constant pranks. Prickly's dream is to one day rise up to be a middle school principal, as was stated numerous times in the series, though he stays the principal of the school even after getting a position as one when he realized how appreciated he was at Third Street. Prickly is almost always seen with a pink shirt, a teal necktie, gray or light brown pants, and a black or dark brown tweed suit jacket with a handkerchief in its pocket. He has balding black hair, a noticeable mustache, wrinkles and he wear glasses just like many of the teachers at Third Street School."
    });
    map.set('Miss Grotke', {
        full_name: 'Alordayne Grotke',
        age: 37,
        gender: 'Female',
        home: "-",
        description: "Alordayne Grotke, known by students and staff as Miss Grotke, is a fourth-grade teacher at Third Street School. According to the series creators, Grotke is Indian. She is warm and kind but somewhat eccentric (being a hippie and loving yoga and preserving the earth). She is adored by her pupils because she is possibly the only teacher who stands up for the students. She performs magic tricks at clubs as a hobby. Miss Grotke loves to meditate, and she has an overbite like Gretchen. She has tan skin, a skinny figure with hairy legs, and thick curly black hair which stretches to the sides. She wears a long pale green robe-like dress with sandals, a blue bead necklace, triangle blue earrings, and yellow circular framed glasses."
    });
    map.set('Menlo', {
        full_name: 'Menlo',
        age: 9,
        gender: 'Male',
        home: "-",
        description: "He is Miss Lemon's assistant, or 'aide', as he likes to say. Menlo is obsessed with organization. He lives by his planner, and disdains people who are not organized. He is good with the filing system and spends most of his time inside the office, rarely going outside to playground as he's too busy. Menlo was initially a bad student raging havoc at the playground, but his personality changed permanently after he was 'randomly chosen' as the 'principal for a day'."
    });
    map.set('Upside-Down Girl', {
        full_name: 'Katie Ann Gunderson',
        age: 9,
        gender: 'Female',
        home: "-",
        description: "The Upside-Down Girl has no defined personality. However, it has been confirmed that she has become impervious to nausea from the many times she hung from her bar. It is possible that she is violent when angry as seen when she warned T.J. that he would be sorry if she got off her bar. As a result of always hanging upside down, her blonde pigtails always stick up, even on the rare occasion that she is right-side up. She wears a one-piece white underwear with short sleeves and a pink dress over it with the skirt always stuck up."
    });
    map.set('Aaron Kelso', {
        full_name: 'Aaron Kelso',
        age: 60,
        gender: 'Male',
        home: "-",
        description: "Aaron Kelso, known to The Recess Gang and the rest of the Third Street School children as Mr. Kelso, is the friendly local shopkeeper of a corner store named 'Kelso's' which the children visit in numerous episodes. He is kind and often acts as a voice of advice and reason to the kids. His wife seems more interested in money than in advice, as she seems to henpeck him about turning away business in the name of morality."
    });
    map.set('The Ashleys', {
        full_name: 'Ashley A., Ashley B., Ashley Q., Ashley T.',
        age: 10,
        gender: 'Female',
        home: "-",
        description: "The Ashleys are a clique of four beautiful, fashionable, snobby, and spoiled girls, and are always uttering the phrase 'Scandalous!'. Each of them has a younger brother named Tyler and a younger sister named Brittany, who are also students at Third Street School. They are recurring antagonists towards The Recess Gang, especially towards Spinelli, due to her first name being Ashley and her refusal to join their clique. The current members of the group are: Ashley Armbruster 'Ashley A.' ~ The spoiled and vain leader whose signature color is pink. Ashley Boulet 'Ashley B.' ~ The sarcastic and prissy second-in-command whose signature color is yellow. Ashley Quinlan 'Ashley Q.' ~ The meanest and most selfish member of the clique whose signature color is blue. Ashley Tomassian 'Ashley T.' ~ The smartest and yet quietest of the clique whose signature color is green."
    });


    return (
        <div className='main-page'>
            <div className='row'>
                <div className='cell' onClick={() => setCharacter('TJ Detweiler')}>TJ Detweiler</div>
                <div className='cell' onClick={() => setCharacter('Vince LaSalle')}>Vince LaSalle</div>
                <div className='cell' onClick={() => setCharacter('Ashley Spinelli')}>Ashley Spinelli</div>
                <div className='cell' onClick={() => setCharacter('Gretchen Grundler')}>Gretchen Grundler</div>
                <div className='cell' onClick={() => setCharacter('Mickey Blumberg')}>Mikey Blumberg</div>
                <div className='cell' onClick={() => setCharacter('Gus Griswald')}>Gus Griswald</div>
            </div>
            <div className='column'>
                <div className='col'>
                    <div className='pepe'>
                        <div className='cell' onClick={() => setCharacter('Hank')}>Hank</div>
                    </div>
                    <div className='pepe'>
                        <div className='cell' onClick={() => setCharacter('Miss Lemon')}>Miss Lemon</div>
                    </div>
                    <div className='pepe'>
                        <div className='cell' onClick={() => setCharacter('Miss Finster')}>Miss Finster</div>
                    </div>
                    <div className='pepe'>
                        <div className='cell' onClick={() => setCharacter('Principal Prickly')}>Principal Prickly</div>
                    </div>
                    <div className='pepe'>
                        <div className='cell' onClick={() => setCharacter('Miss Grotke')}>Miss Grotke</div>
                    </div>
                    <div className='pepe'>
                        <div className='cell' onClick={() => setCharacter('Menlo')}>Menlo</div>
                    </div>
                    <div className='pepe'>
                        <div className='cell' onClick={() => setCharacter('Upside-Down Girl')}>Upside-Down Girl</div>
                    </div>
                    <div className='pepe'>
                        <div className='cell' onClick={() => setCharacter('Aaron Kelso')}>Aaron Kelso</div>
                    </div>
                </div>
                <div className='space'>
                    {
                        character !== 'null'? ( 
                        <div className='space-row'>
                            <div className='info'>
                                <p><strong>Full name:</strong>{map.get(character).full_name}</p>
                                <p><strong>Gender:</strong>{map.get(character).gender}</p>
                            </div>
                            <div className='info'>
                                <p><strong>Age:    </strong>{map.get(character).age}</p>
                                <p><strong>Home:    </strong>{map.get(character).home}</p>
                            </div>
                            <div className='description'>
                                <p><strong>Description:</strong>{map.get(character).description}</p>
                            </div>
                    </div>):null
                    }
                </div>
                <div className='col'>
                    <div className='pepe'>
                        <div className='cell' onClick={() => setCharacter('Randall Weems')}>Randall</div>
                    </div>
                    <div className='pepe'>
                        <div className='cell' onClick={() => setCharacter('Erwin Lawson')}>Lawson</div>
                    </div>
                    <div className='pepe'>
                        <div className='cell' onClick={() => setCharacter('The Diggers')}>The Diggers</div>
                    </div>
                    <div className='pepe'>
                        <div className='cell' onClick={() => setCharacter('The Ashleys')}>The Ashleys</div>    
                    </div>
                    <div className='pepe'>
                        <div className='cell' onClick={() => setCharacter('King Bob')}>King Bob</div>
                    </div>
                    <div className='pepe'>
                        <div className='cell' onClick={() => setCharacter('Butch')}>Butch</div>
                    </div>
                    <div className='pepe'>
                        <div className='cell' onClick={() => setCharacter('Dr. Slicer')}>Dr. Slicer</div>
                    </div>
                    <div className='pepe'>
                        <div className='cell' onClick={() => setCharacter('The Kindergartners')}>The Kindergartners</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage
