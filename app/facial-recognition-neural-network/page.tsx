import Footer from '@/components/Footer';
import Link from 'next/link';

const codeBlocks = {
  files: `dataset/train/nic
dataset/train/other`,
  preprocess: `$ python preprocess.py
Processing directory: ../dataset/train/nic
Successfully processed and saved: ../processed/train/nic/nic_3.jpeg
Successfully processed and saved: ../processed/train/nic/nic_2.jpeg
Successfully processed and saved: ../processed/train/nic/nic_1.jpeg
Processing directory: ../dataset/train/other
Successfully processed and saved: ../processed/train/other/sam5.jpg
Successfully processed and saved: ../processed/train/other/sam4.jpg
Successfully processed and saved: ../processed/train/other/sam3.jpg
Successfully processed and saved: ../processed/train/other/sam2.jpg
Successfully processed and saved: ../processed/train/other/sam1.jpg`,
  train: `$ python train.py
Epoch [1/10],  Loss: 0.6947
Epoch [2/10],  Loss: 1.0903
Epoch [3/10],  Loss: 0.2861
Epoch [4/10],  Loss: 0.2743
Epoch [5/10],  Loss: 0.0942
Epoch [6/10],  Loss: 0.0605
Epoch [7/10],  Loss: 0.0180
Epoch [8/10],  Loss: 0.0031
Epoch [9/10],  Loss: 0.0005
Epoch [10/10], Loss: 0.0001
Model saved as model.pt
Training completed successfully!`,
  evaluate: `$ python evaluate.py
Accuracy on test dataset: 80.00%`,
  run: `python preprocess.py   # Preprocess faces
python train.py        # Train the model
python evaluate.py     # Evaluate accuracy
python webcam.py       # Webcam demo`,
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-3 text-lg font-semibold text-stone-100 md:text-xl">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-md border border-stone-700 bg-stone-900 p-4 font-mono text-[10px] leading-relaxed text-stone-200 md:text-xs">
      {children}
    </pre>
  );
}

export default function FacialRecognitionNeuralNetworkPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] px-6 pb-12 pt-10 text-stone-300 md:px-12 md:pt-12">
      <article className="mx-auto w-full max-w-[30rem]">
        <header className="sticky top-0 z-40 -mx-6 mb-6 bg-[#1a1a1a]/95 px-6 py-4 text-xs font-normal leading-none backdrop-blur md:-mx-12 md:px-12 md:text-sm">
          <Link
            href="/"
            className="text-xs font-normal leading-none text-stone-50 transition-colors hover:text-stone-300 md:text-sm"
          >
            Nicholas Chen
          </Link>
          <span className="text-stone-500"> / </span>
          <Link href="/projects" className="text-stone-400 transition-colors hover:text-stone-200">
            Projects
          </Link>
          <span className="text-stone-500"> / </span>
          <span className="text-stone-400">Facial Recognition Neural Network</span>
        </header>

        <h1 className="mb-3 text-2xl font-medium text-white md:text-3xl">
          Facial Recognition Neural Network
        </h1>
        <p className="mb-6 text-sm text-stone-500">
          Nicholas Chen · February 2026 ·{' '}
          <Link
            href="https://github.com/nicholaschen09/facial-recognition-neural-network"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline transition-colors hover:text-stone-100"
          >
            GitHub repository
          </Link>
        </p>

        <div className="space-y-8 text-xs leading-relaxed md:text-sm">
          <section className="space-y-4">
            <p>
              Modern devices unlock with your face in under a second. I wanted to rebuild a
              minimal version of that experience from scratch: collect a small dataset of faces,
              train a convolutional neural network, and use it to recognise whether the camera is
              currently seeing me (&quot;nic&quot;) or someone else (&quot;other&quot;).
            </p>
            <p>
              The project is organised as a small, production-style pipeline: raw images go through
              a preprocessing stage, get converted into clean face crops, are fed into a CNN for
              training, then evaluated and finally wired into a real-time webcam script.
            </p>
          </section>

          <Section title="Pipeline Overview">
            <h3 className="text-base font-semibold text-stone-100">
              1. Raw Images to Processed Faces (<code>preprocess.py</code>)
            </h3>
            <p>The dataset starts as folders of images grouped by identity, for example:</p>
            <CodeBlock>{codeBlocks.files}</CodeBlock>
            <p>
              <code>preprocess.py</code> walks these directories, runs OpenCV&apos;s{' '}
              <code>haarcascade_frontalface_default.xml</code> detector on each image, then
              converts the frame to grayscale, crops a tight bounding box around each detected face,
              resizes to a fixed 96 x 96 resolution, and writes the crop into a mirrored{' '}
              <code>processed/train/&lt;class&gt;</code> structure.
            </p>
            <p>
              If no face is found, the script logs it so I can clean up low-quality or mislabeled
              images. By the end, every file in <code>processed/</code> is a clean, normalized input
              for the CNN.
            </p>
            <CodeBlock>{codeBlocks.preprocess}</CodeBlock>
          </Section>

          <Section title="CNN Model">
            <h3 className="text-base font-semibold text-stone-100">
              2. <code>FaceRecognitionCNN</code> (<code>model.py</code>)
            </h3>
            <p>
              The core model is a compact convolutional neural network tailored for 96 x 96
              grayscale faces. It uses two convolutional blocks, each following Conv to ReLU to
              MaxPool, growing from 1 channel to 32 and then 64 feature maps.
            </p>
            <p>
              A flattened feature vector of size <code>64 x 21 x 21</code> is fed into a small
              fully connected head, followed by a final linear layer that outputs{' '}
              <code>num_classes</code> logits: here, <code>[nic, other]</code>.
            </p>
            <p>
              Mathematically, the network learns a function that maps an input tensor of shape{' '}
              <code>1 x 96 x 96</code> to a 2-dimensional score vector, where the argmax gives the
              predicted identity.
            </p>
          </Section>

          <Section title="Training & Evaluation">
            <h3 className="text-base font-semibold text-stone-100">
              3. Training Loop (<code>train.py</code>)
            </h3>
            <p>
              Training uses <code>torchvision.datasets.ImageFolder</code> on{' '}
              <code>../processed/train</code>, with transforms that ensure images are grayscale,
              convert them to tensors, and normalize pixel values to a mean of 0.5 and std of 0.5.
            </p>
            <p>
              Hyperparameters are intentionally simple: batch size 32, 10 epochs, Adam optimizer
              with a learning rate of <code>1e-3</code>, and cross-entropy loss. After each epoch
              the script prints the loss and, when training finishes, saves weights to{' '}
              <code>model.pt</code>.
            </p>
            <CodeBlock>{codeBlocks.train}</CodeBlock>

            <h3 className="text-base font-semibold text-stone-100">
              4. Measuring Accuracy (<code>evaluate.py</code>)
            </h3>
            <p>
              For evaluation, I mirror the training setup but load <code>../processed/test</code>{' '}
              instead. The script restores <code>FaceRecognitionCNN</code> from{' '}
              <code>model.pt</code>, runs it on the test loader without gradient tracking, and
              reports:
            </p>
            <CodeBlock>{codeBlocks.evaluate}</CodeBlock>
            <p>
              This gives a clean, single metric for how well the system distinguishes Nic from
              everyone else on unseen data.
            </p>
          </Section>

          <Section title="Using the Model">
            <h3 className="text-base font-semibold text-stone-100">
              5. Single-Image Inference (<code>inference.py</code>)
            </h3>
            <p>
              To make the model easy to reuse, <code>inference.py</code> exposes a small{' '}
              <code>predict(image_path)</code> helper. It loads the trained CNN with{' '}
              <code>num_classes = 2</code>, applies the same preprocessing transforms as training,
              and returns the human-readable label from <code>[&quot;nic&quot;, &quot;other&quot;]</code>.
            </p>

            <h3 className="text-base font-semibold text-stone-100">
              6. Real-Time Webcam Recognition (<code>webcam.py</code>)
            </h3>
            <p>
              The most satisfying part is the webcam demo. It uses OpenCV to grab frames from{' '}
              <code>VideoCapture(0)</code>, runs the same Haar Cascade detector, feeds each
              detected face through the CNN, and overlays a bounding box around the face and a label
              saying either &quot;nic&quot; or &quot;other&quot;.
            </p>
            <p>
              Hit <code>q</code> to exit, and you&apos;ve effectively turned your laptop into a
              tiny, on-device facial recognition system.
            </p>
          </Section>

          <Section title="How to Run It Yourself">
            <p>From the Python project root, you can reproduce the full pipeline:</p>
            <CodeBlock>{codeBlocks.run}</CodeBlock>
          </Section>

          <Section title="Takeaways">
            <p>
              Building this project made it clear how much impact careful preprocessing and
              consistent transforms have on model quality. Even a relatively small CNN can perform
              surprisingly well when every face is aligned, normalized, and seen through the same
              lens during training and inference.
            </p>
            <p>
              More than anything, wiring the model into a live webcam loop made the whole thing feel
              real, turning abstract tensors and loss curves into an interactive tool that either
              recognises me or confidently says &quot;other&quot;.
            </p>
          </Section>

        </div>

        <Footer className="mt-8" />
      </article>
    </main>
  );
}
