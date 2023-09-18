/**
 * AI image library
 * It will generate images from Open AI API
 * default key value 'nature'
 */
import { Box } from "@mui/material";
import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import Button from "@mui/material/Button";
import DraggableImage from "./DraggableImage";

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState(Array());
  const [loading, setLoading] = useState(false);
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    setLoading(true);
    try {
      const res = await openai.createImage({
        prompt: prompt || 'nature',
        n: 8,
        size: "256x256",
      });
      setLoading(false);
      setResult(res.data.data);
    } catch (error) {
      setLoading(false);
      console.error(
        `Error generating image: ${error.response.data.error.message}`
      );
    }
  };
  return (
    <ImageGeneratorContainer>
      <Box display={`flex`} justifyContent={`center`} alignItems={`center`}>
        <Box>
          <TextField
            id="image_type"
            label="Please input image type"
            variant="standard"
            onChange={(e) => setPrompt(e.target.value)}
          />
        </Box>
        <Box mt={`20px`} ml={`20px`} height={`50px`}>
          <Button variant="outlined" onClick={generateImage}>
            Generate
          </Button>
        </Box>
      </Box>
      <Box position={`relative`}>
        {loading && (
          <LoadingBox>
            <img src="assets/images/loading.gif" alt="" />
          </LoadingBox>
        )}
        {!loading && (
          <Box
            display={`grid`}
            gridTemplateColumns={`auto auto`}
            justifyContent={`space-evenly`}
            gap={`30px`}
          >
            {result.length > 0
              ? result.map((row, index) => {
                  return (
                    <DraggableBox key={index}>
                      <DraggableImage imageSrc={row.url} />
                    </DraggableBox>
                  );
                })
              : ""}
          </Box>
        )}
      </Box>
      <></>
    </ImageGeneratorContainer>
  );
};

const ImageGeneratorContainer = styled(Box)`
  flex: 1;
  border: 1px solid #000;
  border-radius: 20px;
  padding: 20px 10px;
`;

const DraggableBox = styled(Box)`
  border-radius: 4px;
  width: 180px;
  height: 180px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
  cursor: pointer;
`;

const LoadingBox = styled(Box)`
  margin-top: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  > img {
    width: 150px;
    height: auto;
    border-radius: 50px;
  }
`;

export default ImageGenerator;
