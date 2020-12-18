/**
 * @param {Routes[]} routes 
 * @returns {Category[]} categories
 */
export function getCats(routes){
  if(routes.categories){
      const cats = routes.categories;
      
      return cats.map(cat => {
        return {
          id: cat.id, 
          title: cat.title, 
          scenes: getScenes(cat),
        }; 
      })
  }
}
/**
 * @param {Category[]} categories
 * @param {number} catId 
 */
export function findCat(categories, catId){
  return categories.find(cat => String(cat.id) === String(catId));
}

/**
 * @param {Catgeory} cat 
 * @returns {Scene[]} scenes
 */
export function getScenes(cat){
  if(cat.scenes){
      const scenes = cat.scenes;
      console.log({cat, scenes})
      return scenes.map(scene => {
        return {
          id: scene.id, 
          title: scene.title, 
          steps: getSteps(scene),
        }; 
      })
  }
}

/**
 * @param {Category[]} categories
 * @param {number} sceneId 
 */
export function findScene(cat, sceneId){
    return cat.scenes.find(scene => scene.id === sceneId);
}

/**
 * @param {Scene} scene 
 * @returns {Step[]} steps
 */
export function getSteps(scene){
  if(scene.steps){
      const steps = scene.steps;
      
      return steps.map(step => {
        return {
          id: step.id, 
          title: step.title, 
        }; 
      })
  }
}

/**
 * @param {Scene[]} scenes
 * @param {number} stepId 
 */
export function findStep(scene, stepId){
  return scene.steps.find(step => step.id === stepId);
}

/**
 * @todo replace with useParam hook  
 * @desc route hacks in place of useParams hook 
 */
export function getCatIdFromRoute(pathname){
  try {
    let catId = pathname.replace("/cat/", "").split("/")[0];
    return catId;
  } catch (err) {
    return false; 
  }
}
export function getSceneIdFromRoute(pathname){
  try {
    let catId = getCatIdFromRoute(pathname);
    if(!catId) return false;

    let sceneId = pathname.replace(`/cat/${catId}/scene/`, "").split("/")[0];

    return sceneId;
  } catch (err) {
    return false; 
  }
}
export function getStepIdFromRoute(pathname){
  try {
    let sceneId = getSceneIdFromRoute(pathname);
    if(!sceneId) return false;

    let stepId = pathname.replace(`/cat/${sceneId}/scene/${sceneId}/`, "").split("/")[0];

    return stepId;
  } catch (err) {
    return false; 
  }
}
export function getIdsFromRoute(pathname){
  return {
    catId: getCatIdFromRoute(pathname),
    sceneId: getSceneIdFromRoute(pathname),
    stepId: getStepIdFromRoute(pathname),
  }
}
