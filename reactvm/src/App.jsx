import {Box,Text,Heading,Button,Image,VStack,HStack} from "@chakra-ui/react"
import one from "./1.png"

function App() {
  return (
   <Box height={2000} >

   
     
    {/* Header */}
      <Box bgColor="rgba(44, 47, 255, 1)" height={81} >
<Text color="white"  ml={10} paddingBlock={7} fontSize={19} fontWeight={500}> Саморобні станки</Text>

        <Box ml={1030} mt={-16}> 
<Button variant="ghost" textColor="white" _hover={{bgColor:"black",textColor:"blue.500"}}>Головна</Button>
<Button variant="ghost" textColor="white">Контакти</Button>
<Button variant="ghost" textColor="white">Товар</Button>
<Button variant="ghost" textColor="white">Dark mode</Button>
        </Box>
  </Box>
  {/* End Header */}
 
  {/* Body */}





  {/* End body */}
 <Box bgColor="rgba(42, 44, 205, 1)" height={330} position={"absolute"} width={1440} >
<Heading textAlign={"center"} color="white"  mt={110}  fontSize={55} fontWeight={800}>   Саморобні станки  </Heading>
<Text textAlign="center" textColor="gray.300" fontSize={25} mt={3}> Створюйте професійні станки власними руками</Text>
<Box>
 <Button ml={500} mt={5} px={8}>
  Почати зараз

 </Button> 

 <Button ml={750} mt={-65} variant={"ghost"} textColor={"white"} borderColor={"white"} borderWidth={2} p={5}>
Дізнайтеся більше
</Button>


</Box>

</Box>
 
 
 
 
 
 <HStack mt={400}  justify={"center"} spacing={130}>
 

    <VStack>
      <Heading  textColor={"black"} textFillColor={"blue"}>      
           500+
      </Heading>
      <Text>
        Проектів
      </Text>
</VStack>
    


   <VStack>
      <Heading  textColor={"black"} textFillColor={"blue"}>      
           1200+
      </Heading>
      <Text>
        Користувачів
      </Text>
</VStack>

<VStack>
      <Heading  textColor={"black"} textFillColor={"blue"}>      
           95%
      </Heading>
      <Text>
        Задоволених
      </Text>
</VStack>

<VStack>
      <Heading  textColor={"black"} textFillColor={"blue"}>      
           24/7
      </Heading>
      <Text>
     Підтримка
      </Text>
</VStack>
 


 </HStack>
  
<HStack spacing={400} ml={100} mt={100}>
  <VStack mt={100} ml={100} >
    <Heading>
    Про наші станки
    </Heading>
 <Text  width={350}>
  Ми допомагаємо майстрам створювати якісні саморобні станки для домашньої майстерні. Наша мета - зробити виробництво доступним для кожного.
</Text>
 
 <Text >
  ✓
Прості та зрозумілі інструкції для початківців
 </Text>
<Text>
  ✓
Доступні матеріали в будь-якому магазині
  </Text>
<Text>
  ✓
Професійна підтримка на кожному етапі
</Text>


  </VStack>
  <Image one src={one} alt="1.png" boxSize={300} mt={50}></Image>
</HStack>



</Box>


)
 }
export default App;
