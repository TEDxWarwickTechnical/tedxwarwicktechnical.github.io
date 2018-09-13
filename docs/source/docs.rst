####
Docs
####

.. important::
   Your working directory is assumed to be the docs directory in the root of
   your local copy of the repository. Some commands may not work as expected if
   this is not the case.


Setting up a local instance
===========================

These instructions assume you have a local copy of the website repository
already. If you don't, clone one now.

1. Ensure you have `Python 3 <https://www.python.org/>`_ installed.

2. Install virtualenv as a standard python package by running :code:`pip3
   install virtualenv`.

3. Setup a virtual environment in the *docs/* directory by running
   :code:`virtualenv .`.

4. You'll need to activate the virtual environment before using it, and you
   should deactivate it once you're finished. The activation persists with your
   shell's session, not the current directory. Run :code:`source bin/activate`
   to activate, and `deactivate` to manually deactivate. Ending your session
   using :code:`exit`, :code:`logout`, or by closing your terminal also
   deactivates the virtual environment.

   Any Python related commands run while the virtual environment is activated
   will use it instead of your system Python. For this reason, it is
   no longer necessary to use the :code:`python3` and :code:`pip3` aliases.

5. Install the remainder of the requirements using :code:`pip install -r
   requirements.txt`.


Using your local instance
=========================

Ensure the virtual environment is active as per step 4 above, then use the
provided build script to generate the HTML version of the docs by running
:code:`make html`. Unlike the rest of the website, there is no watcher. You'll
need to run this every time you want to view your changes. Your text editor or
IDE may offer the option to configure a custom file watcher to trigger on save
(for example using the `save-commands plugin
<https://atom.io/packages/save-commands>`_ for `Atom <https://atom.io/>`_).

The build script also does not contain a web server. However, Python's simple
built in one will be sufficient for our use here. Open a new shell session in
the *build/html/* directory and run :code:`python -m http.server`. This will
make your local copy of the generated docs available at
`<http://localhost:8000/>`_, but `only from your computer
<https://stackoverflow.com/q/19482164/1813169>`_.


Formatting
==========


Admonitions
-----------

.. danger::
   Danger

.. error::
   Error

.. caution::
   Caution

.. warning::
   Warning

.. attention::
   Attention

.. important::
   Important

.. hint::
   Hint

.. tip::
   Tip

.. note::
   Note
