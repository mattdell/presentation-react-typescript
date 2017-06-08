// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Quote,
  Slide,
  Text,
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  react: require("../assets/react.svg"),
  typescript: require("../assets/typescript.svg"),
  computerthumbsup: require("../assets/computerthumbsup.gif"),
  typing: require("../assets/typing.gif"),
  getout: require("../assets/getout.gif"),
  ukraine: require("../assets/ukraine.gif"),
  runaway: require("../assets/runaway.gif"),
  fedLogo: require("../assets/fed-logo.svg"),
  me: require("../assets/me.jpg"),
  dd: require("../assets/dd.svg"),
};

preloader(images);

const theme = createTheme({
  primary: "black",
  secondary: "#92D400",
  tertiary: "white",
}, {
    primary: "Montserrat",
    secondary: "Montserrat",
  });

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image height={300} width={300} padding={20} src={images.react} /><Image height={300} width={300} padding={20} src={images.typescript} />
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React + Typescript
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} caps lineHeight={1} textColor="secondary" margin="0 0 40px">
            Who am I and why am I talking to you?
          </Heading>
          <Layout>
            <Fit>
              <Image
                src={images.me}
                height={200}
                padding="0 20px"
              />
              <Image
                src={images.fedLogo}
                height={200}
                padding="0 20px"
              />
            </Fit>
            <Fill>
              <Text textColor="tertiary" textAlign="left" margin="0 0 20px">
                Deloitte Digital, London
              </Text>
              <Text textColor="tertiary" textAlign="left" margin="0 0 20px">
                Front-end Developer, formerly back-end
              </Text>
              <Text textColor="tertiary" textAlign="left" margin="0 0 20px">
                Been using React now for 3 years, TypeScript for 3 months
              </Text>
              <Text textColor="tertiary" textAlign="left" margin="0 0 20px">
                American 🇺🇸
              </Text>
              <Text textColor="tertiary" textAlign="left" margin="0 0 20px">
                https://github.com/mattdell
              </Text>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary" margin="0 0 40px">
            Question time
          </Heading>
          <Text textColor="tertiary" textAlign="left" margin="0 0 20px">
            Who has heard of TypeScript?
          </Text>
          <Appear>
            <Text textColor="tertiary" textAlign="left" margin="0 0 20px">
              Who is using TypeScript already?
            </Text>
          </Appear>
          <Appear>
            <Text textColor="tertiary" textAlign="left" margin="0 0 20px">
              Who wants to use TypeScript?
            </Text>
          </Appear>
          <Appear>
            <Text textColor="tertiary" textAlign="left" margin="0 0 20px">
              Who is not interested in TypeScript?
            </Text>
          </Appear>
          <Appear>
            <Text textColor="tertiary" textAlign="left" margin="0 0 20px">
              Who is just here for the free food?
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            What is TypeScript?
          </Heading>
          <Appear>
            <BlockQuote>
              <Quote textColor="tertiary">TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.</Quote>
              <Cite>typescriptlang.org</Cite>
            </BlockQuote>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} caps lineHeight={1} textColor="secondary">
            What is TypeScript trying to solve?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary" margin="0 0 60px">
            JavaScript is weak
          </Heading>
          <Image
            src={images.ukraine}
          />
        </Slide>
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={require("raw-loader!../assets/code/1")}
          ranges={[
            { loc: [0, 1], title: "Let's talk about type safety", note: "We have a variable one" },
            { loc: [2, 3], title: "Let's talk about type safety", note: "one is now a number" },
            { loc: [3, 4], title: "Let's talk about type safety", note: "one is now a string" },
            { loc: [4, 5], title: "Let's talk about type safety", note: "one is now a string emoji" },
            { loc: [5, 6], title: "Let's talk about type safety", note: "one is now an array of string emojis" },
            { loc: [6, 7], title: "Let's talk about type safety", note: "one is now a function that returns an array of string emojis" },
            { loc: [8, 9], title: "Let's talk about type safety", note: "¯\\_(ツ)_/¯" },
          ]}
        />
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={require("raw-loader!../assets/code/2")}
          ranges={[
            { loc: [0, 1], title: "Let's increment a thing" },
            { loc: [2, 3], title: "What is the result?" },
            { loc: [2, 3], title: "What is the result?", note: "2" },
            { loc: [4, 5], title: "What is the result?" },
            { loc: [4, 5], title: "What is the result?", note: "'11'" },
            { loc: [19, 20], title: "What is the result?" },
            { loc: [19, 20], title: "What is the result?", note: "'09/06/2017'" },
            { loc: [21, 22], title: "What is the result?" },
            { loc: [21, 22], title: "What is the result?", note: "'18/06/2017'" },
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} caps lineHeight={1} textColor="secondary">
            What if we could catch these errors at compile time?
          </Heading>
        </Slide>
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={require("raw-loader!../assets/code/3")}
          ranges={[
            { loc: [0, 270], title: "Typescript to the rescue!" },
            { loc: [0, 1], title: "Typescript to the rescue!", note: "We specify this function only accepts a number and returns a number" },
            { loc: [2, 3], title: "Typescript to the rescue!", note: "All good" },
            { loc: [4, 5], title: "Typescript to the rescue!", note: "[ts] Argument of type '\"1\"' is not assignable to parameter of type 'number'." },
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            Easy, right?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            Let's talk about arrays and objects
          </Heading>
        </Slide>
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={require("raw-loader!../assets/code/4")}
          ranges={[
            { loc: [0, 1], title: "Arrays", note: ": type[]" },
            { loc: [1, 2], title: "Arrays", note: ": Array<type>" },
            { loc: [3, 11], title: "Objects", note: "interfaces" },
            { loc: [12, 14], title: "Array of Objects", note: ": interface[]" },
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary" margin="0 0 40px">
            How to bail
          </Heading>
          <Image src={images.runaway} />
        </Slide>
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={require("raw-loader!../assets/code/5")}
          ranges={[
            { loc: [0, 1], title: "Array", note: ": any[]" },
            { loc: [2, 4], title: "Object", note: ": any" },
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary" margin="0 0 40px">
            Why TypeScript?
          </Heading>
          <Text textAlign="left" textColor="tertiary" textSize="60px">
            ✓ JavaScript is TypeScript
          </Text>
          <Text textAlign="left" textColor="tertiary" textSize="60px">
            ✓ Catch errors early
          </Text>
          <Text textAlign="left" textColor="tertiary" textSize="60px">
            ✓ Better refactoring
          </Text>
          <Text textAlign="left" textColor="tertiary" textSize="60px">
            ✓ More readable code
          </Text>
          <Text textAlign="left" textColor="tertiary" textSize="60px">
            ✓ Documentation
          </Text>
          <Text textAlign="left" textColor="tertiary" textSize="60px">
            ✓ Better IDE support
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary" margin="0 0 40px">
            Why not TypeScript?
          </Heading>
          <Text textAlign="left" textColor="tertiary" textSize="60px">
           🚫 Slight learning curve
          </Text>
          <Text textAlign="left" textColor="tertiary" textSize="60px">
           🚫 Linter setup could be a pain
          </Text>
          <Text textAlign="left" textColor="tertiary" textSize="60px">
           🚫 Error messages can be confusing
          </Text>
          <Text textAlign="left" textColor="tertiary" textSize="60px">
           🚫 You're just writing a quick prototype
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary" margin="0 0 40px">
            TypeScript with React
          </Heading>
          <Text textColor="tertiary">
            Live coding time!
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image
            src={images.dd}
            height={300}
            margin="0 0 100px"
          />
          <Text textColor="tertiary">Thank you Edinburgh!</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary" margin="0 0 40px">
            Extra time
          </Heading>
          <Text textColor="tertiary" textAlign="left" margin="0 0 20px">http://www.typescriptlang.org/play/</Text>
          <Text textColor="tertiary" textAlign="left" margin="0 0 20px">https://github.com/eslint/typescript-eslint-parser</Text>
          <Text textColor="tertiary" textAlign="left" margin="0 0 20px">http://esprima.org/demo</Text>
        </Slide>
      </Deck>
    );
  }
}
