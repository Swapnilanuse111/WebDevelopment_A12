import tkinter as tk
from tkinter import messagebox
import math


class PharmChemProjectApp:

    def __init__(self, root):
        self.root = root
        self.root.title("OpenChemPharm | Laboratory Suite")
        self.root.geometry("1200x760")
        self.root.minsize(950, 650)
        self.root.configure(bg="#0B1020")

        # ================= COLOR THEME =================

        self.BG = "#0B1020"
        self.SIDEBAR = "#101729"
        self.CARD = "#151F33"
        self.CARD_LIGHT = "#1B2940"
        self.INPUT = "#0D1526"

        self.PURPLE = "#8B5CF6"
        self.PURPLE_HOVER = "#7C3AED"
        self.CYAN = "#22D3EE"
        self.GREEN = "#34D399"
        self.RED = "#FB7185"

        self.WHITE = "#F1F5F9"
        self.GRAY = "#94A3B8"
        self.BORDER = "#27364F"

        self.nav_buttons = {}
        self.entries = {}

        # ================= MAIN LAYOUT =================

        self.main = tk.Frame(self.root, bg=self.BG)
        self.main.pack(fill="both", expand=True)

        self.sidebar = tk.Frame(
            self.main,
            bg=self.SIDEBAR,
            width=235
        )

        self.sidebar.pack(side="left", fill="y")
        self.sidebar.pack_propagate(False)

        self.workspace = tk.Frame(
            self.main,
            bg=self.BG
        )

        self.workspace.pack(
            side="left",
            fill="both",
            expand=True
        )

        self.setup_sidebar()
        self.setup_header()

        self.show_surface_tension()

    # =================================================
    # SIDEBAR
    # =================================================

    def setup_sidebar(self):

        # Logo
        logo = tk.Frame(
            self.sidebar,
            bg=self.SIDEBAR
        )
        logo.pack(fill="x", padx=20, pady=(28, 30))

        tk.Label(
            logo,
            text="⚗",
            font=("Segoe UI", 25),
            bg=self.SIDEBAR,
            fg=self.CYAN
        ).pack(side="left")

        tk.Label(
            logo,
            text="OpenChem",
            font=("Segoe UI", 17, "bold"),
            bg=self.SIDEBAR,
            fg=self.WHITE
        ).pack(side="left", padx=5)

        tk.Label(
            self.sidebar,
            text="LABORATORY SUITE",
            font=("Segoe UI", 9, "bold"),
            bg=self.SIDEBAR,
            fg="#64748B"
        ).pack(anchor="w", padx=25, pady=(0, 12))

        # Navigation
        navigation = [
            ("⌂", "Dashboard", self.show_dashboard),
            ("◉", "Surface Tension", self.show_surface_tension),
            ("⚖", "Mass Calculator", self.show_mass_calculator),
            ("⚗", "Molecular Weight", self.show_molecular_weight),
            ("▤", "Project Info", self.show_project_info)
        ]

        for icon, name, command in navigation:

            btn = tk.Button(
                self.sidebar,
                text=f"  {icon}     {name}",
                command=command,
                font=("Segoe UI", 10),
                bg=self.SIDEBAR,
                fg=self.GRAY,
                activebackground=self.CARD_LIGHT,
                activeforeground=self.CYAN,
                relief="flat",
                bd=0,
                anchor="w",
                padx=12,
                pady=14,
                cursor="hand2"
            )

            btn.pack(fill="x", padx=12, pady=3)

            self.nav_buttons[name] = btn

        # Bottom section
        bottom = tk.Frame(
            self.sidebar,
            bg=self.SIDEBAR
        )

        bottom.pack(side="bottom", fill="x", padx=20, pady=22)

        tk.Frame(
            bottom,
            bg=self.BORDER,
            height=1
        ).pack(fill="x", pady=(0, 15))

        tk.Label(
            bottom,
            text="●  SYSTEM ONLINE",
            font=("Segoe UI", 9, "bold"),
            bg=self.SIDEBAR,
            fg=self.GREEN
        ).pack(anchor="w")

        tk.Label(
            bottom,
            text="Version 1.0.0 | Academic Edition",
            font=("Segoe UI", 8),
            bg=self.SIDEBAR,
            fg="#64748B"
        ).pack(anchor="w", pady=(5, 0))

    def select_navigation(self, selected):

        for name, button in self.nav_buttons.items():

            if name == selected:
                button.config(
                    bg="#29234A",
                    fg=self.CYAN,
                    font=("Segoe UI", 10, "bold")
                )

            else:
                button.config(
                    bg=self.SIDEBAR,
                    fg=self.GRAY,
                    font=("Segoe UI", 10)
                )

    # =================================================
    # HEADER
    # =================================================

    def setup_header(self):

        self.header = tk.Frame(
            self.workspace,
            bg=self.BG
        )

        self.header.pack(
            fill="x",
            padx=35,
            pady=(25, 10)
        )

        left = tk.Frame(
            self.header,
            bg=self.BG
        )

        left.pack(side="left", fill="x", expand=True)

        tk.Label(
            left,
            text="PHARMACEUTICAL CHEMISTRY",
            font=("Segoe UI", 9, "bold"),
            bg=self.BG,
            fg=self.PURPLE
        ).pack(anchor="w")

        self.page_title = tk.Label(
            left,
            text="Surface Tension",
            font=("Segoe UI", 25, "bold"),
            bg=self.BG,
            fg=self.WHITE
        )

        self.page_title.pack(anchor="w", pady=(5, 3))

        self.page_subtitle = tk.Label(
            left,
            text="Laboratory calculation and analysis",
            font=("Segoe UI", 10),
            bg=self.BG,
            fg=self.GRAY
        )

        self.page_subtitle.pack(anchor="w")

        # Header status
        status = tk.Frame(
            self.header,
            bg=self.CARD,
            highlightbackground=self.BORDER,
            highlightthickness=1
        )

        status.pack(side="right", anchor="n", padx=5, pady=12)

        tk.Label(
            status,
            text="●  READY",
            font=("Segoe UI", 9, "bold"),
            bg=self.CARD,
            fg=self.GREEN
        ).pack(padx=15, pady=9)

        # Separator
        tk.Frame(
            self.workspace,
            bg=self.BORDER,
            height=1
        ).pack(fill="x", padx=35, pady=(12, 15))

    # =================================================
    # PAGE UTILITIES
    # =================================================

    def clear_page(self):

        if hasattr(self, "page_body"):
            self.page_body.destroy()

        self.entries = {}

    def create_page(self, title, subtitle, nav_name):

        self.clear_page()

        self.page_title.config(text=title)
        self.page_subtitle.config(text=subtitle)

        self.select_navigation(nav_name)

        self.page_body = tk.Frame(
            self.workspace,
            bg=self.BG
        )

        self.page_body.pack(
            fill="both",
            expand=True,
            padx=35,
            pady=(10, 25)
        )

        return self.page_body

    def create_card(self, parent):

        return tk.Frame(
            parent,
            bg=self.CARD,
            highlightbackground=self.BORDER,
            highlightthickness=1
        )

    def create_label(self, parent, text):

        tk.Label(
            parent,
            text=text,
            font=("Segoe UI", 10, "bold"),
            bg=self.CARD,
            fg=self.WHITE
        ).pack(
            anchor="w",
            pady=(15, 7)
        )

    # =================================================
    # INPUT FIELD
    # =================================================

    def create_input(self, parent, label, unit, key):

        wrapper = tk.Frame(
            parent,
            bg=self.CARD
        )

        wrapper.pack(fill="x", pady=(0, 14))

        tk.Label(
            wrapper,
            text=label,
            font=("Segoe UI", 10, "bold"),
            bg=self.CARD,
            fg=self.WHITE
        ).pack(anchor="w", pady=(0, 7))

        field = tk.Frame(
            wrapper,
            bg=self.INPUT,
            highlightbackground=self.BORDER,
            highlightthickness=1
        )

        field.pack(fill="x")

        entry = tk.Entry(
            field,
            font=("Segoe UI", 12),
            bg=self.INPUT,
            fg=self.WHITE,
            insertbackground=self.CYAN,
            relief="flat",
            bd=0
        )

        entry.pack(
            side="left",
            fill="x",
            expand=True,
            padx=12,
            pady=12
        )

        tk.Label(
            field,
            text=unit,
            font=("Segoe UI", 9, "bold"),
            bg=self.INPUT,
            fg=self.CYAN
        ).pack(side="right", padx=12)

        self.entries[key] = entry

        return entry

    # =================================================
    # BUTTON
    # =================================================

    def create_button(self, parent, text, command):

        button = tk.Button(
            parent,
            text=text,
            command=command,
            font=("Segoe UI", 10, "bold"),
            bg=self.PURPLE,
            fg=self.WHITE,
            activebackground=self.PURPLE_HOVER,
            activeforeground=self.WHITE,
            relief="flat",
            bd=0,
            cursor="hand2",
            pady=13
        )

        button.pack(fill="x", pady=(8, 0))

        button.bind(
            "<Enter>",
            lambda event: button.config(
                bg=self.PURPLE_HOVER
            )
        )

        button.bind(
            "<Leave>",
            lambda event: button.config(
                bg=self.PURPLE
            )
        )

        return button

    # =================================================
    # RESULT PANEL
    # =================================================

    def create_result_panel(self, parent, title, formula):

        panel = tk.Frame(
            parent,
            bg="#102A32",
            highlightbackground="#1B5660",
            highlightthickness=1
        )

        panel.pack(fill="x", pady=(0, 15))

        tk.Label(
            panel,
            text="✦  CALCULATION RESULT",
            font=("Segoe UI", 9, "bold"),
            bg="#102A32",
            fg=self.CYAN
        ).pack(
            anchor="w",
            padx=20,
            pady=(18, 10)
        )

        tk.Label(
            panel,
            text=title,
            font=("Segoe UI", 10),
            bg="#102A32",
            fg="#94A3B8"
        ).pack(
            anchor="w",
            padx=20
        )

        result = tk.Label(
            panel,
            text="—",
            font=("Segoe UI", 24, "bold"),
            bg="#102A32",
            fg=self.GREEN,
            wraplength=350
        )

        result.pack(
            anchor="w",
            padx=20,
            pady=(5, 12)
        )

        tk.Frame(
            panel,
            bg="#1B5660",
            height=1
        ).pack(fill="x", padx=20)

        tk.Label(
            panel,
            text="FORMULA",
            font=("Segoe UI", 8, "bold"),
            bg="#102A32",
            fg="#64748B"
        ).pack(
            anchor="w",
            padx=20,
            pady=(12, 3)
        )

        tk.Label(
            panel,
            text=formula,
            font=("Segoe UI", 11),
            bg="#102A32",
            fg=self.WHITE
        ).pack(
            anchor="w",
            padx=20,
            pady=(0, 18)
        )

        return result

    def get_number(self, key, label):

        value = self.entries[key].get().strip()

        if not value:
            raise ValueError(f"Please enter {label}.")

        number = float(value)

        if not math.isfinite(number):
            raise ValueError(f"{label} must be a finite number.")

        return number

    # =================================================
    # DASHBOARD
    # =================================================

    def show_dashboard(self):

        page = self.create_page(
            "Dashboard",
            "Welcome to your pharmaceutical chemistry workspace.",
            "Dashboard"
        )

        # Welcome card
        welcome = tk.Frame(
            page,
            bg="#211D42",
            highlightbackground="#41366B",
            highlightthickness=1
        )

        welcome.pack(fill="x", pady=(0, 25))

        tk.Label(
            welcome,
            text="Welcome to OpenChemPharm",
            font=("Segoe UI", 20, "bold"),
            bg="#211D42",
            fg=self.WHITE
        ).pack(
            anchor="w",
            padx=25,
            pady=(22, 5)
        )

        tk.Label(
            welcome,
            text="Your smart laboratory calculation assistant.",
            font=("Segoe UI", 11),
            bg="#211D42",
            fg="#B9B2E8"
        ).pack(
            anchor="w",
            padx=25,
            pady=(0, 22)
        )

        tk.Label(
            page,
            text="QUICK ACCESS",
            font=("Segoe UI", 9, "bold"),
            bg=self.BG,
            fg=self.GRAY
        ).pack(anchor="w", pady=(0, 12))

        # Calculator cards
        cards = tk.Frame(
            page,
            bg=self.BG
        )

        cards.pack(fill="x")

        calculators = [
            (
                "◉",
                "Surface Tension",
                "Du Noüy ring method",
                self.CYAN,
                self.show_surface_tension
            ),
            (
                "⚖",
                "Mass Calculator",
                "Gravimetric analysis",
                self.GREEN,
                self.show_mass_calculator
            ),
            (
                "⚗",
                "Molecular Weight",
                "Mass and mole calculation",
                self.PURPLE,
                self.show_molecular_weight
            )
        ]

        for icon, title, description, color, command in calculators:

            card = tk.Frame(
                cards,
                bg=self.CARD,
                highlightbackground=self.BORDER,
                highlightthickness=1
            )

            card.pack(
                side="left",
                fill="both",
                expand=True,
                padx=(0, 10)
            )

            tk.Label(
                card,
                text=icon,
                font=("Segoe UI", 24),
                bg=self.CARD,
                fg=color
            ).pack(
                anchor="w",
                padx=18,
                pady=(18, 8)
            )

            tk.Label(
                card,
                text=title,
                font=("Segoe UI", 11, "bold"),
                bg=self.CARD,
                fg=self.WHITE
            ).pack(
                anchor="w",
                padx=18
            )

            tk.Label(
                card,
                text=description,
                font=("Segoe UI", 9),
                bg=self.CARD,
                fg=self.GRAY
            ).pack(
                anchor="w",
                padx=18,
                pady=(5, 18)
            )

            tk.Button(
                card,
                text="Open Calculator  →",
                command=command,
                font=("Segoe UI", 9, "bold"),
                bg=self.CARD_LIGHT,
                fg=color,
                activebackground="#29364F",
                activeforeground=self.WHITE,
                relief="flat",
                bd=0,
                cursor="hand2",
                pady=10
            ).pack(
                fill="x",
                padx=12,
                pady=(0, 12)
            )

        # Bottom info
        info = tk.Frame(
            page,
            bg=self.CARD,
            highlightbackground=self.BORDER,
            highlightthickness=1
        )

        info.pack(fill="x", pady=25)

        tk.Label(
            info,
            text="LABORATORY WORKSPACE",
            font=("Segoe UI", 9, "bold"),
            bg=self.CARD,
            fg=self.CYAN
        ).pack(
            anchor="w",
            padx=20,
            pady=(18, 8)
        )

        tk.Label(
            info,
            text=(
                "Perform scientific calculations, analyze experimental "
                "values, and simplify your pharmaceutical chemistry workflow."
            ),
            font=("Segoe UI", 10),
            bg=self.CARD,
            fg=self.GRAY,
            wraplength=650,
            justify="left"
        ).pack(
            anchor="w",
            padx=20,
            pady=(0, 18)
        )

    # =================================================
    # SURFACE TENSION
    # =================================================

    def show_surface_tension(self):

        page = self.create_page(
            "Surface Tension",
            "Calculate surface tension using the Du Noüy ring method.",
            "Surface Tension"
        )

        layout = tk.Frame(
            page,
            bg=self.BG
        )

        layout.pack(fill="both", expand=True)

        # Left calculator card
        card = self.create_card(layout)

        card.pack(
            side="left",
            fill="both",
            expand=True,
            padx=(0, 18)
        )

        tk.Label(
            card,
            text="Du Noüy Ring Calculator",
            font=("Segoe UI", 15, "bold"),
            bg=self.CARD,
            fg=self.WHITE
        ).pack(
            anchor="w",
            padx=22,
            pady=(22, 5)
        )

        tk.Label(
            card,
            text="Enter your experimental measurements.",
            font=("Segoe UI", 9),
            bg=self.CARD,
            fg=self.GRAY
        ).pack(
            anchor="w",
            padx=22,
            pady=(0, 20)
        )

        form = tk.Frame(card, bg=self.CARD)

        form.pack(
            fill="x",
            padx=22
        )

        self.create_input(
            form,
            "Applied Force",
            "N",
            "force"
        )

        self.create_input(
            form,
            "Ring Radius",
            "m",
            "radius"
        )

        self.create_button(
            form,
            "Calculate Surface Tension   →",
            self.calculate_surface_tension
        )

        # Right result panel
        right = tk.Frame(
            layout,
            bg=self.BG,
            width=310
        )

        right.pack(
            side="right",
            fill="y"
        )

        right.pack_propagate(False)

        self.surface_result = self.create_result_panel(
            right,
            "Surface Tension",
            "γ = F / (4πR)"
        )

        # Information card
        note = tk.Frame(
            right,
            bg=self.CARD,
            highlightbackground=self.BORDER,
            highlightthickness=1
        )

        note.pack(fill="x")

        tk.Label(
            note,
            text="ⓘ  ABOUT THIS CALCULATION",
            font=("Segoe UI", 9, "bold"),
            bg=self.CARD,
            fg=self.PURPLE
        ).pack(
            anchor="w",
            padx=15,
            pady=(15, 8)
        )

        tk.Label(
            note,
            text=(
                "This calculator uses the simplified "
                "ideal Du Noüy ring equation.\n\n"
                "Experimental measurements may require "
                "a correction factor."
            ),
            font=("Segoe UI", 9),
            bg=self.CARD,
            fg=self.GRAY,
            wraplength=250,
            justify="left"
        ).pack(
            anchor="w",
            padx=15,
            pady=(0, 15)
        )

    def calculate_surface_tension(self):

        try:
            force = self.get_number("force", "force")
            radius = self.get_number("radius", "ring radius")

            if force < 0 or radius <= 0:
                raise ValueError(
                    "Force must be non-negative and radius must be positive."
                )

            tension = force / (4 * math.pi * radius)

            self.surface_result.config(
                text=f"{tension:.6f} N/m"
            )

        except ValueError as error:

            messagebox.showerror(
                "Input Error",
                str(error)
            )

    # =================================================
    # MASS CALCULATOR
    # =================================================

    def show_mass_calculator(self):

        page = self.create_page(
            "Mass Calculator",
            "Calculate the difference between initial and final mass.",
            "Mass Calculator"
        )

        layout = tk.Frame(page, bg=self.BG)
        layout.pack(fill="both", expand=True)

        card = self.create_card(layout)

        card.pack(
            side="left",
            fill="both",
            expand=True,
            padx=(0, 18)
        )

        tk.Label(
            card,
            text="Gravimetric Mass Calculator",
            font=("Segoe UI", 15, "bold"),
            bg=self.CARD,
            fg=self.WHITE
        ).pack(
            anchor="w",
            padx=22,
            pady=(22, 5)
        )

        tk.Label(
            card,
            text="Enter the initial and final mass.",
            font=("Segoe UI", 9),
            bg=self.CARD,
            fg=self.GRAY
        ).pack(
            anchor="w",
            padx=22,
            pady=(0, 20)
        )

        form = tk.Frame(card, bg=self.CARD)
        form.pack(fill="x", padx=22)

        self.create_input(
            form,
            "Initial Mass",
            "g",
            "initial"
        )

        self.create_input(
            form,
            "Final Mass",
            "g",
            "final"
        )

        self.create_button(
            form,
            "Calculate Mass Difference   →",
            self.calculate_mass
        )

        right = tk.Frame(
            layout,
            bg=self.BG,
            width=310
        )

        right.pack(side="right", fill="y")
        right.pack_propagate(False)

        self.mass_result = self.create_result_panel(
            right,
            "Mass Difference",
            "Δm = |m₂ - m₁|"
        )

    def calculate_mass(self):

        try:
            initial = self.get_number("initial", "initial mass")
            final = self.get_number("final", "final mass")

            if initial < 0 or final < 0:
                raise ValueError(
                    "Mass values must be non-negative."
                )

            difference = abs(final - initial)

            self.mass_result.config(
                text=f"{difference:.4f} g"
            )

        except ValueError as error:

            messagebox.showerror(
                "Input Error",
                str(error)
            )

    # =================================================
    # MOLECULAR WEIGHT
    # =================================================

    def show_molecular_weight(self):

        page = self.create_page(
            "Molecular Weight",
            "Calculate molecular weight from mass and moles.",
            "Molecular Weight"
        )

        layout = tk.Frame(page, bg=self.BG)
        layout.pack(fill="both", expand=True)

        card = self.create_card(layout)

        card.pack(
            side="left",
            fill="both",
            expand=True,
            padx=(0, 18)
        )

        tk.Label(
            card,
            text="Molecular Weight Calculator",
            font=("Segoe UI", 15, "bold"),
            bg=self.CARD,
            fg=self.WHITE
        ).pack(
            anchor="w",
            padx=22,
            pady=(22, 5)
        )

        tk.Label(
            card,
            text="Enter the sample mass and amount of substance.",
            font=("Segoe UI", 9),
            bg=self.CARD,
            fg=self.GRAY
        ).pack(
            anchor="w",
            padx=22,
            pady=(0, 20)
        )

        form = tk.Frame(card, bg=self.CARD)
        form.pack(fill="x", padx=22)

        self.create_input(
            form,
            "Sample Mass",
            "g",
            "mass"
        )

        self.create_input(
            form,
            "Amount of Substance",
            "mol",
            "moles"
        )

        self.create_button(
            form,
            "Calculate Molecular Weight   →",
            self.calculate_molecular_weight
        )

        right = tk.Frame(
            layout,
            bg=self.BG,
            width=310
        )

        right.pack(side="right", fill="y")
        right.pack_propagate(False)

        self.molecular_result = self.create_result_panel(
            right,
            "Molecular Weight",
            "M = Mass / Moles"
        )

    def calculate_molecular_weight(self):

        try:
            mass = self.get_number("mass", "mass")
            moles = self.get_number("moles", "moles")

            if mass < 0 or moles <= 0:
                raise ValueError(
                    "Mass must be non-negative and moles must be positive."
                )

            molecular_weight = mass / moles

            self.molecular_result.config(
                text=f"{molecular_weight:.4f} g/mol"
            )

        except ValueError as error:

            messagebox.showerror(
                "Input Error",
                str(error)
            )

    # =================================================
    # PROJECT INFORMATION
    # =================================================

    def show_project_info(self):

        page = self.create_page(
            "Project Information",
            "Application details and project documentation.",
            "Project Info"
        )

        card = self.create_card(page)

        card.pack(
            fill="x",
            pady=(0, 20)
        )

        tk.Label(
            card,
            text="OpenChemPharm",
            font=("Segoe UI", 22, "bold"),
            bg=self.CARD,
            fg=self.CYAN
        ).pack(
            anchor="w",
            padx=25,
            pady=(25, 5)
        )

        tk.Label(
            card,
            text="Smart Pharmaceutical Chemistry Toolkit",
            font=("Segoe UI", 11),
            bg=self.CARD,
            fg=self.GRAY
        ).pack(
            anchor="w",
            padx=25,
            pady=(0, 25)
        )

        details = [
            ("VERSION", "1.0.0"),
            ("TECHNOLOGY", "Python + Tkinter"),
            ("DOMAIN", "Pharmaceutical Chemistry"),
            ("PROJECT TYPE", "Academic Application")
        ]

        for label, value in details:

            row = tk.Frame(
                card,
                bg=self.CARD
            )

            row.pack(
                fill="x",
                padx=25,
                pady=8
            )

            tk.Label(
                row,
                text=label,
                font=("Segoe UI", 9, "bold"),
                bg=self.CARD,
                fg=self.GRAY,
                width=18,
                anchor="w"
            ).pack(side="left")

            tk.Label(
                row,
                text=value,
                font=("Segoe UI", 10, "bold"),
                bg=self.CARD,
                fg=self.WHITE
            ).pack(side="left")

        tk.Frame(
            card,
            bg=self.BORDER,
            height=1
        ).pack(fill="x", padx=25, pady=15)

        tk.Label(
            card,
            text="AVAILABLE MODULES",
            font=("Segoe UI", 9, "bold"),
            bg=self.CARD,
            fg=self.PURPLE
        ).pack(
            anchor="w",
            padx=25,
            pady=(0, 10)
        )

        tk.Label(
            card,
            text=(
                "• Du Noüy Ring Surface Tension Calculator\n"
                "• Gravimetric Mass Calculator\n"
                "• Molecular Weight Calculator\n"
                "• Scientific Calculation Dashboard"
            ),
            font=("Segoe UI", 10),
            bg=self.CARD,
            fg=self.GRAY,
            justify="left"
        ).pack(
            anchor="w",
            padx=25,
            pady=(0, 25)
        )


# =====================================================
# APPLICATION ENTRY POINT
# =====================================================

if __name__ == "__main__":

    root = tk.Tk()

    app = PharmChemProjectApp(root)

    root.mainloop()
