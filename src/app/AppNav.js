import React from "react";

/**
 * @requires Routes
 */
import { useLocation, useParams } from "react-router-dom";

/**
 * @requires Bootstrap
 */
import { Breadcrumb, Dropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

/**
 * @requires utils
 */
import {
  getCats,
  getScenes,
  getSteps,
  findCat,
  findScene,
  findStep,
  getCatIdFromRoute,
  getSceneIdFromRoute,
  getStepIdFromRoute
} from "./";


export function useAppRoutes(routes) {
    /**
     * @step useRoutes
     */
    const { pathname } = useLocation();
    //   const {catId} = useParams();

    /**
     * @step
     */
    const [cats] = React.useState(getCats(routes));    

    /**
     * @step Cat
     */
    const [cat, setCat] = React.useState(null);
    const [catId, setCatId] = React.useState(null);


    React.useEffect(()=>{
        try {
            setCatId(getCatIdFromRoute(pathname));
            setCat(findCat(cats, catId)?.title);
        } catch (err) {
            setCat("Please select a category");
        }
    }, [pathname, cats, catId]);

    /**
     * @step Scene
     */
    const [scenes, setScenes] = React.useState(null);
    const [scene, setScene] = React.useState(null);
    const [sceneId, setSceneId] = React.useState(null);


    React.useEffect(()=>{
        try {
            setScenes(getScenes(cat));
            setSceneId(getSceneIdFromRoute(pathname));
            setScene(findScene(cat, sceneId)?.title);
        } catch (err) {
            setScene("Please select a scene");
        }
    }, [pathname, cat, sceneId]);

    /**
     * @step Step
     */
    const [steps, setSteps] = React.useState(null);
    const [step, setStep] = React.useState(null);
    const [stepId, setStepId] = React.useState(null);


    React.useEffect(()=>{
        try {
            setSteps(getSteps(scene));
            setStepId(getStepIdFromRoute(pathname));
            setStep(findStep(scene, stepId)?.title);
        } catch (err) {
            setStep("Please select a step");
        }
    }, [pathname, scene, stepId]);

    return {
        catId,
        sceneId,
        stepId,
        cats,
        scenes, 
        steps, 
        selectedCat: cat,
        selectedScene: scene,
        selectedStep: step,
    };
}

export function AppNav({ routes }) {

    const {
        cats, 
        scenes,
        steps,
        selectedCat,
        selectedScene,
        selectedStep, 
    } = useAppRoutes(routes);

  return (
    <Breadcrumb>
      <LinkContainer to="/home">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </LinkContainer>
      <Breadcrumb.Item>
        <CatNavs 
            cats={cats} 
            selectedCat={selectedCat} 
        />
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <SceneNavs 
            scenes={scenes} 
            selectedScene={selectedScene} 
        />
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <StepNavs 
            steps={steps} 
            selectedStep={selectedStep} 
        />
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export function CatNavs({ cats, selectedCat }) {

  return (
    <Dropdown>
      <Dropdown.Toggle variant={"light"} id="dropdown-basic">
        {selectedCat}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {cats?.map((cat) => (
          <LinkContainer key={cat.id} to={`/cat/${cat.id}`}>
            <Dropdown.Item key={cat.id} as="span">
              {cat.title}
            </Dropdown.Item>
          </LinkContainer>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export function SceneNavs({ scenes, selectedScene }) {

  return (
    <Dropdown>
      <Dropdown.Toggle variant={"light"} id="dropdown-basic">
        {selectedScene}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {scenes?.map((scene) => (
          <LinkContainer key={scene.id} to={`scene${scene.id}`}>
            <Dropdown.Item key={scene.id} as="span">
              {scene.title}
            </Dropdown.Item>
          </LinkContainer>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export function StepNavs({ steps, selectedStep }) {

  return (
    <Dropdown>
      <Dropdown.Toggle variant={"light"} id="dropdown-basic">
        {selectedStep}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {steps?.map((step) => (
          <LinkContainer key={step.id} to={`step${step.id}`}>
            <Dropdown.Item key={step.id} as="span">
              {step.title}
            </Dropdown.Item>
          </LinkContainer>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default AppNav;
