// import React from 'react'

// function directory() {
//     return (
//         <div>
//             <h1>Directory</h1>
//         </div>
//     )
// }

// export default directory


import React, { useRef } from "react";
// import Header from "components/Header";
// import ScrollIndicator from "components/ScrollIndicator";
// import ExternalInfo from "components/ExternalInfo";
// import ScrollToTop from "../ScrollToTop";

const directory = () => {
    // const commentSection = useRef(null);

    // const gotoCommentSection = () =>
    //     window.scrollTo({
    //         top: commentSection.current.offsetTop,
    //         behavior: "smooth"
    //     });

    // const scrollToBottom = () =>
    //     window.scrollTo({
    //         top: document.documentElement.scrollHeight,
    //         behavior: "smooth"
    //     });

    return (
        <>
           
{/* 
            <ExternalInfo page="scrollIndicator" />

            <ScrollIndicator /> */}
            {/* <ScrollToTop /> */}

            <div className="row w-100">
                <div className="col mb-3 col-12 text-center">
                    <h2>Scroll this page to see the indicator in action</h2>
                    <div className="row my-5">
                        {/* <div className="col">
                            <button
                                className="btn btn-primary mr-3"
                                onClick={gotoCommentSection}
                            >
                                Go to Comment Section
                            </button>
                            <button
                                className="btn btn-primary"
                                onClick={scrollToBottom}
                            >
                                Scroll to bottom
                            </button>
                        </div> */}
                    </div>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer nec odio. Praesent libero. Sed cursus ante
                        dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
                        imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce
                        nec tellus sed augue semper porta. Mauris massa.
                        Vestibulum lacinia arcu eget nulla. Class aptent taciti
                        sociosqu ad litora torquent per conubia nostra, per
                        inceptos himenaeos. Curabitur sodales ligula in libero.{" "}
                    </p>

                    <p>
                        Sed dignissim lacinia nunc. Curabitur tortor.
                        Pellentesque nibh. Aenean quam. In scelerisque sem at
                        dolor. Maecenas mattis. Sed convallis tristique sem.
                        Proin ut ligula vel nunc egestas porttitor. Morbi lectus
                        risus, iaculis vel, suscipit quis, luctus non, massa.
                        Fusce ac turpis quis ligula lacinia aliquet. Mauris
                        ipsum. Nulla metus metus, ullamcorper vel, tincidunt
                        sed, euismod in, nibh. Quisque volutpat condimentum
                        velit. Class aptent taciti sociosqu ad litora torquent
                        per conubia nostra, per inceptos himenaeos.{" "}
                    </p>

                    <p>
                        Nam nec ante. Sed lacinia, urna non tincidunt mattis,
                        tortor neque adipiscing diam, a cursus ipsum ante quis
                        turpis. Nulla facilisi. Ut fringilla. Suspendisse
                        potenti. Nunc feugiat mi a tellus consequat imperdiet.
                        Vestibulum sapien. Proin quam. Etiam ultrices.
                        Suspendisse in justo eu magna luctus suscipit. Sed
                        lectus.{" "}
                    </p>

                    <p>
                        Integer euismod lacus luctus magna. Quisque cursus,
                        metus vitae pharetra auctor, sem massa mattis sem, at
                        interdum magna augue eget diam. Vestibulum ante ipsum
                        primis in faucibus orci luctus et ultrices posuere
                        cubilia Curae; Morbi lacinia molestie dui. Praesent
                        blandit dolor. Sed non quam. In vel mi sit amet augue
                        congue elementum. Morbi in ipsum sit amet pede facilisis
                        laoreet. Donec lacus nunc, viverra nec, blandit vel,
                        egestas et, augue. Vestibulum tincidunt malesuada
                        tellus. Ut ultrices ultrices enim. Curabitur sit amet
                        mauris.{" "}
                    </p>

                    <p>
                        Morbi in dui quis est pulvinar ullamcorper. Nulla
                        facilisi. Integer lacinia sollicitudin massa. Cras
                        metus. Sed aliquet risus a tortor. Integer id quam.
                        Morbi mi. Quisque nisl felis, venenatis tristique,
                        dignissim in, ultrices sit amet, augue. Proin sodales
                        libero eget ante. Nulla quam. Aenean laoreet. Vestibulum
                        nisi lectus, commodo ac, facilisis ac, ultricies eu,
                        pede.{" "}
                    </p>

                    <p>
                        Ut orci risus, accumsan porttitor, cursus quis, aliquet
                        eget, justo. Sed pretium blandit orci. Ut eu diam at
                        pede suscipit sodales. Aenean lectus elit, fermentum
                        non, convallis id, sagittis at, neque. Nullam mauris
                        orci, aliquet et, iaculis et, viverra vitae, ligula.
                        Nulla ut felis in purus aliquam imperdiet. Maecenas
                        aliquet mollis lectus. Vivamus consectetuer risus et
                        tortor. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Integer nec odio. Praesent libero. Sed
                        cursus ante dapibus diam. Sed nisi. Nulla quis sem at
                        nibh elementum imperdiet.{" "}
                    </p>

                    <p>
                        Duis sagittis ipsum. Praesent mauris. Fusce nec tellus
                        sed augue semper porta. Mauris massa. Vestibulum lacinia
                        arcu eget nulla. Class aptent taciti sociosqu ad litora
                        torquent per conubia nostra, per inceptos himenaeos.
                        Curabitur sodales ligula in libero. Sed dignissim
                        lacinia nunc. Curabitur tortor. Pellentesque nibh.
                        Aenean quam. In scelerisque sem at dolor.{" "}
                    </p>

                    <p>
                        Maecenas mattis. Sed convallis tristique sem. Proin ut
                        ligula vel nunc egestas porttitor. Morbi lectus risus,
                        iaculis vel, suscipit quis, luctus non, massa. Fusce ac
                        turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla
                        metus metus, ullamcorper vel, tincidunt sed, euismod in,
                        nibh. Quisque volutpat condimentum velit. Class aptent
                        taciti sociosqu ad litora torquent per conubia nostra,
                        per inceptos himenaeos. Nam nec ante. Sed lacinia, urna
                        non tincidunt mattis, tortor neque adipiscing diam, a
                        cursus ipsum ante quis turpis. Nulla facilisi. Ut
                        fringilla. Suspendisse potenti.{" "}
                    </p>

                    <p>
                        Nunc feugiat mi a tellus consequat imperdiet. Vestibulum
                        sapien. Proin quam. Etiam ultrices. Suspendisse in justo
                        eu magna luctus suscipit. Sed lectus. Integer euismod
                        lacus luctus magna. Quisque cursus, metus vitae pharetra
                        auctor, sem massa mattis sem, at interdum magna augue
                        eget diam. Vestibulum ante ipsum primis in faucibus orci
                        luctus et ultrices posuere cubilia Curae; Morbi lacinia
                        molestie dui. Praesent blandit dolor. Sed non quam. In
                        vel mi sit amet augue congue elementum. Morbi in ipsum
                        sit amet pede facilisis laoreet.{" "}
                    </p>

                    <p>
                        Donec lacus nunc, viverra nec, blandit vel, egestas et,
                        augue. Vestibulum tincidunt malesuada tellus. Ut
                        ultrices ultrices enim. Curabitur sit amet mauris. Morbi
                        in dui quis est pulvinar ullamcorper. Nulla facilisi.
                        Integer lacinia sollicitudin massa. Cras metus. Sed
                        aliquet risus a tortor. Integer id quam. Morbi mi.
                        Quisque nisl felis, venenatis tristique, dignissim in,
                        ultrices sit amet, augue. Proin sodales libero eget
                        ante.{" "}
                    </p>

                    <p>
                        Nulla quam. Aenean laoreet. Vestibulum nisi lectus,
                        commodo ac, facilisis ac, ultricies eu, pede. Ut orci
                        risus, accumsan porttitor, cursus quis, aliquet eget,
                        justo. Sed pretium blandit orci. Ut eu diam at pede
                        suscipit sodales. Aenean lectus elit, fermentum non,
                        convallis id, sagittis at, neque. Nullam mauris orci,
                        aliquet et, iaculis et, viverra vitae, ligula. Nulla ut
                        felis in purus aliquam imperdiet. Maecenas aliquet
                        mollis lectus. Vivamus consectetuer risus et tortor.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer nec odio. Praesent libero.{" "}
                    </p>

                    <p>
                        Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem
                        at nibh elementum imperdiet. Duis sagittis ipsum.
                        Praesent mauris. Fusce nec tellus sed augue semper
                        porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
                        Class aptent taciti sociosqu ad litora torquent per
                        conubia nostra, per inceptos himenaeos. Curabitur
                        sodales ligula in libero. Sed dignissim lacinia nunc.
                        Curabitur tortor. Pellentesque nibh.{" "}
                    </p>

                    <p>
                        Aenean quam. In scelerisque sem at dolor. Maecenas
                        mattis. Sed convallis tristique sem. Proin ut ligula vel
                        nunc egestas porttitor. Morbi lectus risus, iaculis vel,
                        suscipit quis, luctus non, massa. Fusce ac turpis quis
                        ligula lacinia aliquet. Mauris ipsum. Nulla metus metus,
                        ullamcorper vel, tincidunt sed, euismod in, nibh.
                        Quisque volutpat condimentum velit. Class aptent taciti
                        sociosqu ad litora torquent per conubia nostra, per
                        inceptos himenaeos. Nam nec ante.{" "}
                    </p>

                    {/* <h3 className="my-5" ref={commentSection}>
                        User Comments and Reviews
                    </h3> */}

                    <p>
                        Sed lacinia, urna non tincidunt mattis, tortor neque
                        adipiscing diam, a cursus ipsum ante quis turpis. Nulla
                        facilisi. Ut fringilla. Suspendisse potenti. Nunc
                        feugiat mi a tellus consequat imperdiet. Vestibulum
                        sapien. Proin quam. Etiam ultrices. Suspendisse in justo
                        eu magna luctus suscipit. Sed lectus. Integer euismod
                        lacus luctus magna. Quisque cursus, metus vitae pharetra
                        auctor, sem massa mattis sem, at interdum magna augue
                        eget diam. Vestibulum ante ipsum primis in faucibus orci
                        luctus et ultrices posuere cubilia Curae; Morbi lacinia
                        molestie dui.{" "}
                    </p>

                    <p>
                        Praesent blandit dolor. Sed non quam. In vel mi sit amet
                        augue congue elementum. Morbi in ipsum sit amet pede
                        facilisis laoreet. Donec lacus nunc, viverra nec,
                        blandit vel, egestas et, augue. Vestibulum tincidunt
                        malesuada tellus. Ut ultrices ultrices enim. Curabitur
                        sit amet mauris. Morbi in dui quis est pulvinar
                        ullamcorper. Nulla facilisi. Integer lacinia
                        sollicitudin massa. Cras metus.{" "}
                    </p>
                    <p>
                        Sed lacinia, urna non tincidunt mattis, tortor neque
                        adipiscing diam, a cursus ipsum ante quis turpis. Nulla
                        facilisi. Ut fringilla. Suspendisse potenti. Nunc
                        feugiat mi a tellus consequat imperdiet. Vestibulum
                        sapien. Proin quam. Etiam ultrices. Suspendisse in justo
                        eu magna luctus suscipit. Sed lectus. Integer euismod
                        lacus luctus magna. Quisque cursus, metus vitae pharetra
                        auctor, sem massa mattis sem, at interdum magna augue
                        eget diam. Vestibulum ante ipsum primis in faucibus orci
                        luctus et ultrices posuere cubilia Curae; Morbi lacinia
                        molestie dui.{" "}
                    </p>

                    <p>
                        Praesent blandit dolor. Sed non quam. In vel mi sit amet
                        augue congue elementum. Morbi in ipsum sit amet pede
                        facilisis laoreet. Donec lacus nunc, viverra nec,
                        blandit vel, egestas et, augue. Vestibulum tincidunt
                        malesuada tellus. Ut ultrices ultrices enim. Curabitur
                        sit amet mauris. Morbi in dui quis est pulvinar
                        ullamcorper. Nulla facilisi. Integer lacinia
                        sollicitudin massa. Cras metus.{" "}
                    </p>
                    <p>
                        Sed lacinia, urna non tincidunt mattis, tortor neque
                        adipiscing diam, a cursus ipsum ante quis turpis. Nulla
                        facilisi. Ut fringilla. Suspendisse potenti. Nunc
                        feugiat mi a tellus consequat imperdiet. Vestibulum
                        sapien. Proin quam. Etiam ultrices. Suspendisse in justo
                        eu magna luctus suscipit. Sed lectus. Integer euismod
                        lacus luctus magna. Quisque cursus, metus vitae pharetra
                        auctor, sem massa mattis sem, at interdum magna augue
                        eget diam. Vestibulum ante ipsum primis in faucibus orci
                        luctus et ultrices posuere cubilia Curae; Morbi lacinia
                        molestie dui.{" "}
                    </p>

                    <p>
                        Praesent blandit dolor. Sed non quam. In vel mi sit amet
                        augue congue elementum. Morbi in ipsum sit amet pede
                        facilisis laoreet. Donec lacus nunc, viverra nec,
                        blandit vel, egestas et, augue. Vestibulum tincidunt
                        malesuada tellus. Ut ultrices ultrices enim. Curabitur
                        sit amet mauris. Morbi in dui quis est pulvinar
                        ullamcorper. Nulla facilisi. Integer lacinia
                        sollicitudin massa. Cras metus.{" "}
                    </p>
                </div>
            </div>
        </>
    );
};

export default directory;
